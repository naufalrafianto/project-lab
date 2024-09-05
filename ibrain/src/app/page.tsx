import Section from "@/components/section";
import UploadSection from "@/components/UploadSection";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden">
      {/* Decorative Image */}
      <Image
        className="absolute -left-40 -top-80 z-10"
        src="/assets/Polygon 8.svg"
        alt="Decorative polygon"
        width={346}
        height={774}
      />

      <div className="relative flex w-full flex-col pt-20">
        {/* Section 1 */}
        <Section
          title="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          className="items-center justify-center sm:px-24 px-4 flex-col sm:flex-row"
        >
          <UploadSection />
        </Section>

        {/* Section 2 */}
        <div className="flex min-h-screen w-full flex-col justify-center">
          <Section
            title="About Us"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            className="flex-col justify-center px-10 text-center"
          />
        </div>

        {/* Full Width Image */}
        <Image
          className="z-10 w-full object-cover -mt-64"
          src="/assets/Artboard.png"
          alt="Decorative artboard"
          width={1437}
          height={959}
        />
      </div>

      {/* Decorative Image */}
      <Image
        className="absolute -right-52 top-96"
        src="/assets/Polygon 9.svg"
        alt="Decorative polygon"
        width={346}
        height={774}
      />
      <Image
        className="absolute -left-52 bottom-20"
        src="/assets/Polygon 7.svg"
        alt="Decorative polygon"
        width={346}
        height={774}
      />
    </div>
  );
};

export default Home;
