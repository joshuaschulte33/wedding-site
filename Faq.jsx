import React from 'react';
import pinkRosesImage from './assets/pinkroses.png';
import hippieGif from './assets/hippie.gif';
import dancersGif from './assets/dancers.gif';
import cakeGif from './assets/cake.gif';
import ferryImage from './assets/ferry.png';
import carminaImage from './assets/carmina.png';
import madmenImage from './assets/madmen.png';
import pugpawImage from './assets/pugpaw.png';
import bridgeImage from './assets/bridge.png';
import hugImage from './assets/hug.png';
import disneyImage from './assets/disney.png';
import u2Image from './assets/u2.png';
import carmjacketImage from './assets/carmjacket.png';
import rosehandImage from './assets/rosehand.png'
import kissImage from './assets/kiss.png';
import pokeImage from './assets/poke.png';
import sunsetImage from './assets/sunset.png'



const FAQ = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-purple-200 to-pink-500">
      <div
        className="bg-pinkroses-pattern bg-repeat container mx-auto py-8 border-t-4 border-white-500"
        style={{ backgroundImage: `url(${pinkRosesImage})` }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center underline hover:decoration-dashed">Wedding FAQ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2 ">How do I book accommodation for the wedding at the Madonna Inn?</h2>
            <p className="text-white">You can book right from their website, or over the phone. Please check the Travel tab for more info, including the room block code.</p></div>
          <div className="bg-green-500 p-4 rounded-lg outline outline-offset-2 outline-pink-500 hover:bg-green-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">Are there any other hotels nearby?</h2>
            <p className="text-white">Yes! An Embassy Suites by Hilton, or a Best Western are both available nearby, just a 15min walk to the Madonna Inn. Alternatively, Downtown San Luis Obispo is a 10min drive north of venue, or Pismo Beach is 15mins to the south. Both offer more chain and boutique hotels.</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg outline outline-offset-2 outline-white hover:bg-purple-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">How can I arrange transportation to the wedding venue?</h2>
            <p className="text-white">The wedding ceremony and reception are on-site at the Madonna Inn. If you are staying at the hotel, you're already at the wedding - no transportation needed except walking down from your room! </p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg outline outline-offset-2 outline-blue-500 hover:bg-orange-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">What is the best airport to fly into?</h2>
            <p className="text-white">We suggest flying into San Luis Obispo Regional County Airport (airport code SBP), then taking a 10-minute drive or Uber to the venue. Hertz, Enterprise, Avis, and other rental car services are available from the airport.</p>
          </div>
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
            <img src={dancersGif} alt="Dancers" className="mx-auto" />
          </div>
          <div className="bg-green-500 p-4 rounded-lg outline outline-offset-2 outline-pink-500 hover:bg-green-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">Are kids invited to the wedding?</h2>
            <p className="text-white">While we would love to celebrate with our youngest family members, we kindly request that the weekend be an adult-only affair.</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg outline outline-offset-2 outline-white hover:bg-purple-600 transition duration-300">
            <img src={madmenImage} alt="Mad Men" className="m-0" />
          </div>
          <div className="bg-orange-500 p-4 rounded-lg outline outline-offset-2 outline-blue-500 hover:bg-orange-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">What kinds of activities are there to do ON-SITE at the Madonna Inn?</h2>
            <p className="text-white">There are many! The Inn offers horseback riding, bicycles for rent, a heated pool with 2 hot tubs, tennis and basketball courts, flower garden, 3 gift shops, steakhouse, two full bars, full service spa, classy jazz dance floor, and a full service breakfast cafe.  </p>
            <br></br><br></br><h2 className="text-white text-lg font-bold mb-2">What's the parking situation?</h2>
            <p className="text-white"> Parking is FREE at the Madonna Inn, day and night, whether you are staying overnight at the hotel or not. If you're staying at a different hotel, feel free to park and join us for the festivities! </p>
          </div>
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
          <img src={rosehandImage} alt="hand" className="m-0" />      </div>

          <div className="bg-green-500 p-4 rounded-lg outline outline-offset-2 outline-pink-500 hover:bg-green-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2 ">What else is there to do nearby and around town, outside of the Madonna Inn?</h2>
            <p className="text-white">Downtown San Luis Obispo is just an 8min drive away, or by 1.5 mile connected walking trail from the Inn. <br></br><br></br>Pismo Beach (and the coast!) are a 15min drive to the south. For wine lovers, drive 15mins to the south to access Edna, CA and 8+ award winning wineries.</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg outline outline-offset-2 outline-white hover:bg-purple-600 transition duration-300">
    <img src={hippieGif} alt="Hippie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="mx-auto" />
</div>
          <div className="bg-orange-500 p-4 rounded-lg outline outline-offset-2 outline-blue-500 hover:bg-orange-600 transition duration-300">
          <h2 className="text-white text-lg font-bold mb-2">What should I wear to the wedding?</h2>
            <p className="text-white">The attire is "colorful formal". Emphasis on both colorful and formal simultaneously.</p> <br></br>
            <h2 className="text-white text-lg font-bold mb-2">How can I RSVP?</h2>
            <p className="text-white">Formal RSVPs will be sent out as it gets closer to May 2024. If you already know you can't make it, please reach out to Josh or Genevieve to let us know!</p>
          </div>
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
          <img src={hugImage} alt="Hug" className="mx-auto" />
          </div>
          <div className="bg-green-500 p-4 rounded-lg outline outline-offset-2 outline-pink-500 hover:bg-green-600 transition duration-300">
            <h2 className="text-white text-lg font-bold mb-2">What if I forget something?</h2>
            <p className="text-white">The hotel is a 10min walk from a shopping plaza, including a huge Ralph's Grocery store, Starbucks, fast food options and more.</p>
            <br></br><h2 className="text-white text-lg font-bold mb-2">What's for dinner?</h2>
            <p className="text-white">We will be asking for your dinner choice as part of your RSVP when it gets closer to the big day. Offerings will likely include steak, prime rib, chicken, and champagne cake!</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg outline outline-offset-2 outline-white hover:bg-purple-600 transition duration-300">
          <div><img src={disneyImage} alt="Disney" className="" /></div>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg outline outline-offset-2 outline-blue-500 hover:bg-orange-600 transition duration-300">
          <h2 className="text-white text-lg font-bold mb-2">Can I bring +1s?</h2>
            <p className="text-white">Unless specifically stated on your invitation, we have reserved seating availability only for those named on the invitations. This helps us ensure we can accommodate all our invited guests comfortably!</p>
          </div>
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
            <img src={sunsetImage} alt="Sunset" className="w-90 h-100" />
            </div>
            <div className="bg-green-500 p-4 rounded-lg outline outline-offset-2 outline-pink-500 hover:bg-green-600 transition duration-300">
          <h2 className="text-white text-lg font-bold mb-2">Who can I contact for more info, or if I have additional questions?</h2>
            <p className="text-white">Text or email Josh or Genevieve with any questions, we are on our phones all the time so we'll get back to you right away!</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg outline outline-offset-2 outline-white hover:bg-purple-600 transition duration-300">
          <img src={pokeImage} alt="bridge" className="mx-auto" />          
          </div>
          <div className="bg-orange-500 p-4 rounded-lg outline outline-offset-2 outline-blue-500 hover:bg-orange-600 transition duration-300">
            <img src={bridgeImage} alt="suns" className=" " />
          </div>
          <div className="bg-pink-400 p-4 rounded-lg outline outline-offset-2 outline-white-500 hover:bg-pink-500 transition duration-300">
            <img src={carminaImage} alt="carmina" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;