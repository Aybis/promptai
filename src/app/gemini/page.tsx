'use server';

import Image from 'next/image';

const Gemini = () => {
  return (
    <main className="relative h-screen w-full bg-zinc-100">
      <title>Gemini</title>
      <aside className="w-64 bg-zinc-900 h-screen fixed">
        <section className="relative w-full p-4">
          <h1>Chat AI</h1>
        </section>

        {/* Section History Chat */}
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

        {/* Section Account */}
        <section className="fixed bg-zinc-900 z-10 bottom-0 w-64 gap-4 items-center p-2">
          <div className="flex items-center gap-4">
            {/* make me component image with url avatar  */}
            <Image
              src="https://via.placeholder.com/150"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2>Username</h2>
          </div>
        </section>
      </aside>

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
            <select name="" id="">
              <option value="light">Gemini</option>
              <option value="dark">Open AI</option>
              <option value="dark">Open AI</option>
            </select>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Gemini;
