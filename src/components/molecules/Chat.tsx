import Image from 'next/image';
import React from 'react';

type ChatProps = {
  role: string;
  text: string;
  timestamp: string;
  avatarBot: string;
};

export default function Chat({ role, text, timestamp, avatarBot }: ChatProps) {
  return (
    <div className="relative flex items-start odd:justify-start gap-x-3 odd:flex-row-reverse group">
      <Image
        src={role === 'user' ? 'https://via.placeholder.com/150' : avatarBot}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full h-8 w-8"
      />
      <div
        className={`p-4 rounded-lg group-odd:rounded-tr-none group-even:rounded-tl-none ${
          role === 'user'
            ? 'bg-zinc-600 text-zinc-400'
            : 'bg-zinc-700 text-zinc-400'
        }`}
      >
        <p className="flex-1">
          {text}
          <span className="text-xs block text-right mt-2">
            {new Date(timestamp).toLocaleTimeString()}
          </span>
        </p>
      </div>
    </div>
  );
}
