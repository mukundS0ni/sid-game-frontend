import React from 'react';

function Videopage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className='w-full text-[40px] text-white text-center'>VIDEO</div>
      <div className='w-[80%] h-[80%]'>
      <video
        className="w-full h-full object-cover rounded-[20px]"
        src="/ab.mp4"
        controls
      />
      </div>
    </div>
  );
}

export default Videopage;
