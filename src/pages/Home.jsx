import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import routerLogo from "../assets/rr_logo_light.svg"
import tailwindBranding from "../assets/tailwindcss-mark.d52e9897.svg"
import { Link } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh overflow-x-hidden"> 
      <div className="justify-center mb-6 md:flex grid grid-cols-2">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-36 md:h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(100,108,255,0.67)]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-36 md:h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)] animate-spin-slow"
          />
        </a>
        <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={routerLogo}
            alt="React logo"
            className="h-36 md:h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)]"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
          <img
            src={tailwindBranding}
            alt="React logo"
            className="h-36 md:h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)]"
          />
        </a>
        
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">Vite + React + RouterV7 + Tailwind </h1>

      <div className="p-8 rounded-lg mb-6 flex flex-col items-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-max px-4 py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-300 focus:outline-none active:bg-gray-200"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Set Up Routes <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> for new pages and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 mb-4">
        Click on the logos to learn more
      </p>

      <Link
        to="/about"
        className="text-blue-500 font-medium hover:text-blue-700"
      >
        About
      </Link>
    </div>
  );
}

