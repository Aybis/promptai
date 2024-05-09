'use client';

import PrompChat from '@/components/PromptChat/PrompChat';
import Sidebar from '@/components/Sidebar/Sidebar';
import Loading from '@/components/atoms/Loading';
import RenderIf from '@/components/atoms/RenderIf';
import { handleChatGemini, initializeGemini } from '@/configs/gemini';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
  const [messages, setmessages] = useState([]);
  const [userInput, setuserInput] = useState('');
  const [loading, setloading] = useState(false);
  const [chat, setchat] = useState();

  const iconGemini =
    'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg';

  useEffect(() => {
    initializeGemini({
      messages: messages,
    }).then((response) => {
      console.log(response, '<<<< response');
      setchat(response as any);
    });
  }, []);

  const handleSendMessage = async () => {
    handleChatGemini({
      chat,
      setloading,
      setMessages: setmessages,
      setUserInput: setuserInput,
      userInput,
    });
  };

  const handleKeyEnter = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main className="relative h-screen w-full bg-zinc-100">
      <Sidebar />

      {/* Content Section */}
      <section className="ml-64 bg-zinc-800 h-screen relative pt-20 px-8">
        {/* Header */}
        <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 ">
          <div>
            <select name="" id="">
              <option value="light">Gemini</option>
              <option value="dark">Open AI</option>
              <option value="dark">Open AI</option>
            </select>
          </div>
          <div>
            <h2>Button Share</h2>
          </div>
        </div>

        {/* Content */}

        <div className="h-full inset-x-0 flex justify-center">
          <div className="w-3/5 gap-y-6 flex flex-col h-full overflow-y-scroll overflow-hidden pb-28">
            {
              // Chat
              messages.map((message: any, index: number) => (
                <div
                  key={index}
                  className="relative flex items-start odd:justify-start gap-x-3 odd:flex-row-reverse group"
                >
                  <Image
                    src={
                      message.role === 'user'
                        ? 'https://via.placeholder.com/150'
                        : iconGemini
                    }
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full h-8 w-8"
                  />
                  <div
                    className={`p-4 rounded-lg group-odd:rounded-tr-none group-even:rounded-tl-none ${
                      message.role === 'user'
                        ? 'bg-zinc-600 text-zinc-400'
                        : 'bg-zinc-700 text-zinc-400'
                    }`}
                  >
                    <p className="flex-1">
                      {message.text}
                      <span className="text-xs block text-right mt-2">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            }

            {/* Loading */}
            <RenderIf condition={loading}>
              <Loading condition={loading} />
            </RenderIf>
          </div>
        </div>

        {/* Chat  */}
        <PrompChat
          handleSendMessage={handleSendMessage}
          handleKeyEnter={handleKeyEnter}
          userInput={userInput}
          setuserInput={setuserInput}
        />
      </section>
    </main>
  );
};

export default Home;
