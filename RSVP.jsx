import React from 'react';
import { useState } from 'react';
import pinkRosesImage from './assets/pinkroses.png';
import otherRosesImage from './assets/otherroses.png'
import sanluisImage from './assets/sanluis.png';
import zolaLogo from './assets/zola-logo.png';
import targetLogo from './assets/target-logo.png';
import discoball from './assets/discoball.gif';
import amazonLogo from './assets/amazon-logo.png';

function RSVP() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="mx-auto py-8 bg-gradient-to-r from-pink-500 via-purple-200 to-cyan-500"
      style={{ backgroundImage: `url(${otherRosesImage})`, backgroundRepeat: 'repeat' }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold my-8 text-green-900 ">RSVP link coming soon!!!</h1>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="discoball"
          style={{
            backgroundImage: `url(${discoball})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: '300px',
            height: '300px',
          }}
        ></div>
      </div>
      <div className="my-8 text-center">
        <div className="border-t-4 border-pink-500"></div>
        <img src={sanluisImage} alt="Room 2" className="mt-1" />
      </div>
    </div>
  );
}

export default RSVP;
