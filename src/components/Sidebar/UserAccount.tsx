import Image from 'next/image';
import React from 'react';

type UserAccountProps = {
  src: string;
  name: string;
};

export default function UserAccount({ src, name }: UserAccountProps) {
  return (
    <div className="flex items-center gap-4">
      {/* make me component image with url avatar  */}
      <Image
        src={src || 'https://via.placeholder.com/150'}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
      <h2>{name}</h2>
    </div>
  );
}
