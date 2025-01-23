import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import routerLogo from "../assets/rr_logo_light.svg"
import tailwindBranding from "../assets/tailwindcss-mark.d52e9897.svg"

export default function About() {
  return (
    <>
      <div className="min-h-svh flex flex-col justify-center items-center">
        <div className="justify-center mb-6 md:flex grid grid-cols-2">
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  <img
                    src={viteLogo}
                    alt="Vite logo"
                    className="h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(100,108,255,0.67)]"
                  />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  <img
                    src={reactLogo}
                    alt="React logo"
                    className="h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)] animate-spin-slow"
                  />
                </a>
                <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={routerLogo}
                    alt="React logo"
                    className="h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)]"
                  />
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={tailwindBranding}
                    alt="React logo"
                    className="h-48 p-6 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.67)]"
                  />
                </a>
                
              </div>
        <p>This is General React Template with react-router-dom v7.</p>
        <Link className="text-blue-500 font-medium hover:text-blue-700" to='/'>Home</Link>
      </div>
    </>
  )
}