import React from 'react';

type HeaderProps = {
  title: string;
};
export default function Header({ title }: HeaderProps) {
  return (
    <section className="relative w-full p-4">
      <h1>{title}</h1>
    </section>
  );
}
