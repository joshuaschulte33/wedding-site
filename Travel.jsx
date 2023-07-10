import React from 'react';
import hotel from './assets/hotel.png';
import pinkRosesImage from './assets/pinkroses.png';
import roomImage from './assets/room.png';

const Travel = () => {

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 to-pink-900">
      <div>
        <img src={hotel} alt="Splash Image" className="mt-5 w-full h-full" />
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">Join us at the Madonna Inn!</h1>
        <p className="mt-4 ml-20 mr-20 text-xl">
        Our ceremony and reception will be held on-property at the Inn. We encourage staying at one of the venue's 110 unique rooms for easy access to the festivities! Visit their booking page{' '}
        <a href="https://gettaroom.b4checkin.com/madonnainn#main" target="_blank" rel="noopener noreferrer" className="text-white underline bg-pink-500">HERE</a>
        , or book over the phone at (805) 543-3000. Be sure to use the room code, mentioned further below on this page!
        <br /><br />
        Please note that elevators are not available on property. If you prefer a ground floor room, we encourage booking over the phone to verify available ground level rooms.
      </p>
        <div className="mt-8 mx-auto">
          <iframe
            title="Madonna Inn Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13248.295623569893!2d-120.6630175!3d35.2480791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26c825f021d6c998!2sMadonna%20Inn!5e0!3m2!1sen!2sus!4v1616718667104!5m2!1sen!2sus"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="mx-auto"
          ></iframe>
        </div>
      </div>
      <div className="w-full mt-10 py-10 bg-gradient-to-b from-green-500 to-pink-500 text-center">
        <h2 className="text-3xl font-bold">Room Block</h2>
        <p className="mt-2 ml-20 mr-20 text-xl">Use our group code: <span className="font-bold bg-pink-500 text-white">#6045</span> or say <span className="font-bold bg-pink-500 text-white">ROUBLICK & SCHULTE</span> when booking to access our room block. Enter this code into the comments section when booking, or mention it over the phone.</p>
        <p className="mt-2 ml-20 mr-20 text-xl">This page will be updated if the block is sold out!</p>
      </div>
      <div>
        <img src={roomImage} alt="Splash Image" className="w-full h-full" />
      </div>
      <div className="w-full py-10 bg-gradient-to-b from-green-500 to-pink-500 text-center">
        <h2 className="text-3xl font-bold">Flying In ✈️</h2>
        <p className="mt-2 ml-20 mr-20 text-xl">Fly into San Luis Obispo Regional Airport (SBP), for only a 10minute drive or Uber to the Inn. SBP offers service from Alaska, American, and United Airlines. <br>
      </br><br></br>Alternatively, fly into either LAX or SFO for about a 3 hour drive to SLO. You can really make a day of it and take the famous {' '}<a href="https://www.amtrak.com/pacific-surfliner-train" target="_blank" rel="noopener noreferrer"className="text-black font-bold underline">Pacific Surfliner AMTRAK train,</a> with service between LAX and SLO. 
    </p>
      </div>
    </div>
  );
};

export default Travel;