import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="absolute left-0 right-0 top-0 flex w-full items-center justify-between bg-transparent z-50 p-4">
    <div className="flex-1"></div>
    <div className="flex items-center gap-8">
      <button className="rounded-full border border-primary bg-white px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
        Log In
      </button>
      <Link href={"/"}>
        <Image
          width={120}
          height={34}
          src="/assets/logo.png"
          alt="iDerm4U Logo"
          className="h-auto w-auto"
        />
      </Link>
    </div>
  </header>
);

export default Header;
