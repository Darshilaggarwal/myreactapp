import React from 'react';

const Background = () => {
  return (
    <>
      <div className='fixed w-full h-screen z-[2]'>
        <div className='w-full py-12 font-sans flex justify-center text-zinc-500 font-medium text-xl'>
          Documents.
        </div>

        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] text-zinc-900 font-sans flex font-semibold tracking-tighter'>
          Docs.
        </h1>

        {/* Moved this to the bottom of the screen */}
        <h1 className='absolute bottom-0 left-1/2 -translate-x-[50%] mb-4 text-[1vw] text-zinc-500 font-sans flex font-semibold tracking-tighter'>
          press ctrl/cmd + R to get back the docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
