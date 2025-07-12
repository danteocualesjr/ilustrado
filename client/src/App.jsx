import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="bg-white/80 shadow-xl rounded-3xl p-10 flex flex-col items-center max-w-md w-full">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-4">
          <path d="M22 4.01c-.77.35-1.6.59-2.47.7A4.13 4.13 0 0 0 21.4 2.2a8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 12 7.1c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 3.16a4.1 4.1 0 0 0 1.27 5.47c-.7-.02-1.36-.22-1.94-.53v.05a4.1 4.1 0 0 0 3.3 4.02c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 19.54c-.27 0-.54-.02-.8-.05A11.62 11.62 0 0 0 8.29 21.8c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z" fill="#1DA1F2"/>
        </svg>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Ilustrado</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">A modern X/Twitter clone. Share your thoughts, connect, and explore.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow transition">Get Started</button>
      </div>
      <footer className="mt-8 text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ilustrado. All rights reserved.</footer>
    </div>
  );
}

export default App;
