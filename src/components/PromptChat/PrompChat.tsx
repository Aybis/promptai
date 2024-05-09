import React from 'react';

type PromptChatProps = {
  userInput: string;
  setuserInput: (value: string) => void;
  handleKeyEnter: (e: any) => void;
  handleSendMessage: () => void;
};

export default function PrompChat({
  userInput,
  setuserInput,
  handleKeyEnter,
  handleSendMessage,
}: PromptChatProps) {
  return (
    <div className="absolute z-10 bottom-0 inset-x-0 flex justify-center items-center bg-zinc-800">
      <div className="flex relative items-center gap-4 p-4 w-3/5">
        <input
          type="text"
          value={userInput}
          onKeyDown={handleKeyEnter}
          onChange={(e) => setuserInput(e.target.value)}
          placeholder="Type your message"
          className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-600"
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-6 bg-zinc-600 text-zinc-400 p-1.5 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
