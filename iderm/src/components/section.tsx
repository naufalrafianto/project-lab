import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  content: string;
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  content,
  className = "",
  children,
}) => {
  const isAboutUs = title === "About Us";

  return (
    <section
      className={`flex w-full items-center justify-center gap-16 px-12 py-24 lg:px-24 ${className}`}
    >
      <div className="w-full space-y-4 lg:w-1/2 lg:space-y-6">
        <h2 className="text-center text-3xl font-bold lg:text-left lg:text-5xl">
          {title}
        </h2>
        <p className="text-center text-base leading-relaxed text-gray-600 lg:text-left lg:text-lg">
          {content}
        </p>
      </div>
      <div className="flex w-full justify-center lg:w-1/2">
        {children}
        {isAboutUs && (
          <Image
            width={280}
            height={74}
            src="/assets/logo.png"
            alt="iDerm4U Logo"
            className="mx-auto h-auto w-2/3"
          />
        )}
      </div>
    </section>
  );
};

export default Section;
