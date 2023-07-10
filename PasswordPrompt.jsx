import React, { useState } from 'react';

const PasswordPrompt = ({ onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blur">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Enter the Password:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;
