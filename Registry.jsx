import React from 'react';
import { useState } from 'react';
import pinkRosesImage from './assets/pinkroses.png';
import room2Image from './assets/room2.png';
import zolaLogo from './assets/zola-logo.png';
import targetLogo from './assets/target-logo.png';
import amazonLogo from './assets/amazon-logo.png';

function Registry() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="mx-auto py-8 bg-gradient-to-r from-pink-500 via-purple-200 to-cyan-500"
      style={{ backgroundImage: `url(${pinkRosesImage})`, backgroundRepeat: 'repeat' }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold my-8">Gift Registry</h1>
        <p className="text-lg mb-4">
          We are registered at the following places. We appreciate your love and support!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://www.zola.com/registry/joshuaandgenevieve2024"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center bg-green-300 p-6 rounded-full text-black hover:bg-green-500 transition duration-300"
          >
            <img src={zolaLogo} alt="Zola" className="w-16 h-16 mb-4" />
            <span>Zola</span>
          </a>
          <a
            href="https://www.amazon.com/wedding/genevieve-roublick-josh-schulte-san-luis-obispo-may-2024/registry/3J8S4G9N75DQ"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center bg-blue-400 p-6 rounded-full text-black hover:bg-blue-500 transition duration-300"
          >
            <img src={amazonLogo} alt="Amazon" className="w-16 h-16 mb-4" />
            <span>Amazon</span>
          </a>
          <a
            href="https://www.target.com/gift-registry/my-registry?type=WEDDING&registryId=32852860-1321-11ee-892c-294bd222cf0d&regMode=REGST"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center bg-red-400 p-6 rounded-full text-black hover:bg-red-500 transition duration-300"
          >
            <img src={targetLogo} alt="Target" className="w-16 h-16 mb-4" />
            <span>Target</span>
          </a>
        </div>
      </div>
      <div className="my-8 text-center">
        <div className="border-t-4 border-pink-500"></div>
        <img src={room2Image} alt="Room 2" className="mt-1" />
      </div>
    </div>
  );
}

export default Registry;
