import Image from 'next/image';
import React from 'react';
import UserAccount from './UserAccount';
import Header from './Header';
import ContentHistory from '../Content/ContentHistory';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 h-screen fixed">
      <Header title="Chat Bot" />

      {/* Section History Chat */}
      <ContentHistory />

      {/* Section Account */}
      <UserAccount name="Username" src="https://via.placeholder.com/150" />
    </aside>
  );
}
