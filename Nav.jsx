import React from 'react';
import './fonts/crazy.otf';
import './fonts/canteen.otf';
import './fonts/ombra.otf';
import './Nav.css';

const Nav = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-purple-200 to-pink-500 outline-green-500">
      <div
        className="font-crazy flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center mt-4 outline-green-500 background-image"
        style={{ height: '300px' }}
      >
        <div className="flex-grow"></div>
        <nav className="flex space-x-8 nav-links">
          <a href="/" className="bg-green-500 text-white hover:text-pink-700 text-2xl hover:bg-white-500 hover:italic">🌹 SAVE THE DATE 🌹</a>
          <a href="/faq" className="bg-green-500 text-white hover:text-pink-700 text-2xl hover:bg-green-500 hover:italic">🌹 FAQ 🌹</a>
          <a href="/travel" className="bg-green-500 text-white hover:text-pink-700 text-2xl hover:bg-green-500 hover:italic">🌹 TRAVEL 🌹</a>
          <a href="/Registry" className="bg-green-500 text-white hover:text-pink-700 text-2xl hover:bg-green-500 hover:italic">🌹 REGISTRY 🌹</a>
          <a href="/RSVP" className="bg-green-500 text-white hover:text-pink-700 text-2xl hover:bg-green-500 hover:italic">🌹 RSVP 🌹</a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
