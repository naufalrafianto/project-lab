import React from "react";
import Image from "next/image";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100">
      <Image
        src="/assets/loading-wave.svg"
        alt="Loading"
        width={100}
        height={100}
      />
      <div className="mt-6 w-64 rounded-full bg-gray-300">
        <div className="h-2 w-1/2 rounded-full bg-blue-600"></div>
      </div>
      <p className="mt-4 font-bold text-blue-600">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
