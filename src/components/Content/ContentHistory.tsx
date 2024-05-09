import Image from 'next/image';
import React from 'react';

export default function ContentHistory() {
  return (
    <section className=" w-full h-full overflow-y-scroll scroll-smooth ">
      {Array.from({ length: 120 }).map((_, index) => (
        <div key={index} className="p-4">
          <div className="flex items-center gap-4">
            {/* make me component image with url avatar  */}
            <Image
              src="https://via.placeholder.com/150"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2>Name {index + 1}</h2>
              <p>Message {index + 1}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
