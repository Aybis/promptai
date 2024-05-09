import {
  addMessage,
  clearUserInput,
  createMessage,
  handleError,
} from '@/utils/handlerFunction';
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-1.5-pro-latest';
const API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

const genAI = new GoogleGenerativeAI(API_KEY);

const generationConfig = {
  temperature: 1,
  topK: 0,
  topP: 0.95,
  maxOutputTokens: 2048,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const initializeGemini = async ({
  messages: messages,
}: {
  messages: any[];
}) => {
  try {
    const result = await genAI
      .getGenerativeModel({
        model: MODEL_NAME,
      })
      .startChat({
        generationConfig: generationConfig,
        safetySettings: safetySettings,
        history: messages?.map((message: any) => ({
          text: message.text,
          role: message.role,
        })),
      });

    return result;
  } catch (error) {
    console.error(error, '<<<< generate text error');
  }
};

// Main logic for sending messages
const handleChatGemini = async ({
  userInput,
  setMessages,
  setUserInput,
  setloading,
  chat,
}: {
  userInput: string;
  setMessages: Function;
  setUserInput: Function;
  setloading: Function;
  chat: any;
}) => {
  console.log('userInput call this', userInput);

  try {
    const userMessage = createMessage(userInput, 'user');
    addMessage(setMessages, userMessage);
    clearUserInput(setUserInput);

    if (chat) {
      setloading(true);
      const result = await chat.sendMessage(userInput);
      const botMessage = createMessage(result.response.text(), 'bot');
      console.log(setMessages, '<<<< result');
      addMessage(setMessages, botMessage);
      setloading(false);

      return botMessage;
    }
  } catch (error) {
    handleError(error);
    return error;
  }
};

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chat.sendMessage('YOUR_USER_INPUT');
  const response = result.response;
  console.log(response.text());
}

export {
  initializeGemini,
  handleChatGemini,
  runChat,
  generationConfig,
  safetySettings,
};
