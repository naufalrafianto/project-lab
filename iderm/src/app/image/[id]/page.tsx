"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DynamicImagePage = () => {
  const params = useParams();
  const imageId = params?.id as string;
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchImage = () => {
      if (typeof window !== "undefined" && imageId) {
        const storedImageUrl = localStorage.getItem(`image_${imageId}`);

        if (storedImageUrl) {
          setImageUrl(storedImageUrl);
        }
      }
      setIsLoading(false);
    };

    fetchImage();
  }, [imageId]);

  const handleDelete = () => {
    if (imageId) {
      localStorage.removeItem(`image_${imageId}`); // Remove the image from localStorage
      setImageUrl(null); // Clear the image from state
      router.push("/"); // Redirect to the home page or wherever necessary after deletion
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-4 md:flex-row md:gap-8">
      {/* Left: Uploaded Image */}
      {imageUrl ? (
        <div className="relative h-64 w-full max-w-md md:h-96 md:w-1/2">
          <Image
            src={imageUrl}
            alt="Uploaded Image"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      ) : (
        <p>No image found for this ID.</p>
      )}

      {/* Right: Result and Diagnose */}
      <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Result</h2>
        <div className="mb-6">
          <div className="mb-2">
            <p className="text-sm font-medium">Object 1</p>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium">Object 2</p>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium">Object 3</p>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
        <h2 className="mb-2 text-xl font-bold">Diagnose</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button
          onClick={handleDelete}
          className="mt-6 rounded-lg bg-primary px-4 py-1 text-white shadow transition hover:bg-white hover:text-primary"
        >
          Delete Image
        </button>
      </div>
    </div>
  );
};

export default DynamicImagePage;
