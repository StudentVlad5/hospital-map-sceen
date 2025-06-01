import QRCode from "react-qr-code";
import logo from "../assets/images/logo512.png";
import data from "../assets/constants/CONST.json";
import { useState } from "react";

const LogoMode = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white text-black">
      <div className="relative w-96 h-auto mb-10">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        )}
        <img
          src={logo}
          alt="Logo"
          className={`w-full h-auto transition-opacity duration-2000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="mb-10">
        <QRCode value={data.url} size={256} />
        <p className="mt-4 text-xl text-center">{data.url}</p>
      </div>
      <div className="text-lg text-center">
        <p>Телефон: {data.tel}</p>
        <p>Email: {data.email}</p>
        <p>Адрес: {data.address}</p>
      </div>
    </div>
  );
};

export default LogoMode;
