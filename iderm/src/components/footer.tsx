import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-[#00385A] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Links</h2>
            <ul>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-light hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm font-light hover:underline"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Contact</h2>
            {/* Add contact information here */}
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500 pt-8">
          <div className="flex items-center">
            <Image
              width={280}
              height={74}
              src="/assets/logo.png"
              alt="iDerm4U Logo"
              className="h-auto w-1/5"
            />
          </div>
          <p className="mt-2 text-sm">
            © 2024 iDerm4U. All rights reserved. Powered by OpenAI | Developed
            by [Your Name]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
