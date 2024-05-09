import React from 'react';

type LoadingProps = {
  condition: boolean;
};

export default function Loading({ condition: condition }: LoadingProps) {
  return (
    <div
      className={[
        condition ? 'opacity-100 inset-x-0' : 'opacity-0 w-0',
        'relative mt-2 w-full flex flex-col gap-y-2 transition-all duration-500 ease-in-out',
      ].join(' ')}
    >
      <div className="inset-x-0 animate-pulse duration-100 bg-blue-200/10 h-4 rounded-sm shadow-lg" />
      <div className="inset-x-0 animate-pulse duration-200 bg-blue-300/20 h-4 rounded-sm shadow-lg" />
      <div className="inset-x-0 animate-pulse duration-300 bg-blue-400/40 h-4 rounded-sm shadow-lg" />
    </div>
  );
}
