import React, { useState, useEffect } from 'react';
import PasswordPrompt from './PasswordPrompt';
import carmela from './assets/carmela.png';
import steakhouse from './assets/steakhouse.png';

const Home = () => {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    const passwordEntered = localStorage.getItem('passwordEntered');
    if (passwordEntered) {
      setIsPasswordCorrect(true);
    }
  }, []);

  const handlePasswordSubmit = (password) => {
    // Replace 'myPassword' with your actual password
    if (password === 'carmela') {
      setIsPasswordCorrect(true);
      localStorage.setItem('passwordEntered', 'true');
    }
  };

  if (!isPasswordCorrect && showPasswordPrompt) {
    return <PasswordPrompt onSubmit={handlePasswordSubmit} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-8 bg-gradient-to-r from-green-500 via-purple-200 to-pink-500">
      <h1 className="text-4xl font-bold mb-6 text-center underline hover:decoration-dashed">Saturday May 11th, 2024!!!</h1>
      <h1 className="text-2xl font-bold text-center italic hover:decoration-dashed">at the historic Madonna Inn</h1>
      <h1 className="text-2xl font-bold mb-8 text-center italic hover:decoration-dashed">San Luis Obispo, CA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      <div className="w-full h-full bg-gray-300 flex items-center justify-center drop-shadow-2xl">
        <img src={steakhouse} alt="Splash Image" className="w-full h-full object-cover drop-shadow-2xl hover:-hue-rotate-60" />
      </div>
    </div>
    
  );
};

export default Home;