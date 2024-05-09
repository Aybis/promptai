import OpenAI from 'openai';

const openai = new OpenAI();

const chatAPI = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
};

const chatAPIImage = async () => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: "What's in this image?" },
          {
            type: 'image_url',
            image_url:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
};

export { chatAPI, chatAPIImage };
