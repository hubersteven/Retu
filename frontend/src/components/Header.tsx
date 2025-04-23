import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Logolight from "../assets/logo/logo-light.svg";

function Navbar() {
  const [isMuted, setIsMuted] = useState(false);
  const { isLoading, error } = useAuth0();
  return (
    <nav className="flex items-center justify-between px-[80px] py-3 text-white w-full fixed top-0 left-0 right-0 z-50">
      {/* Botón de sonido */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="bg-transparent border-none outline-none focus:ring-0 p-0"
        style={{
          background: "none",
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Logo */}
      <div className="text-xl font-bold">
        <a href="">
          <img src={Logolight} alt="Logo" />
        </a>
      </div>

      {/* Botón de Login / Logout y Perfil */}
      <div className="flex items-center space-x-4">
        {error && <p className="text-red-500">Error de Autenticación</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
