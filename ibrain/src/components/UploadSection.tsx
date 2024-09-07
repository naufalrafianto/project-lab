"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import LoadingWave from "./LoadingWave";

const UploadSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageId, setImageId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedImage(file);
      const generatedImageId = Math.random().toString(36).substring(7);
      setImageId(generatedImageId);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const handleRedirect = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (imageId && selectedImage) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target?.result as string;
          localStorage.setItem(`image_${imageId}`, imageUrl);
          router.push(`/image/${imageId}`);
        };
        reader.readAsDataURL(selectedImage);
      }
    }, 3000);
  };

  if (isLoading) {
    return <LoadingWave />;
  }

  return (
    <div>
      <div className="mx-auto flex h-40 w-80 flex-col items-center justify-center gap-y-2 rounded-[4rem] bg-white shadow-lg bg-white">
        <button
          onClick={toggleModal}
          className="flex h-10 w-48 items-center justify-center rounded-3xl bg-primary text-center font-semibold text-white shadow-lg hover:shadow-md"
        >
          Upload Image
        </button>
        <p>Or Drop a File</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative mx-auto flex h-[80vh] w-[80vw] flex-col items-center justify-center gap-y-4 rounded-xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Upload Image</h2>

            <div
              {...getRootProps()}
              className={`flex h-[60vh] w-full flex-col items-center justify-center rounded-xl border-2 ${
                isDragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-dashed border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              {selectedImage ? (
                <div className="flex w-full max-w-[80%] items-center justify-between rounded-lg border-2 border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gray-200">
                      <Image
                        width={96}
                        height={96}
                        src="/assets/image-logo.png"
                        alt="Uploaded File Icon"
                      />
                    </div>
                    <div className="ml-6">
                      <p className="text-xl font-semibold">{selectedImage.name}</p>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    width={240}
                    height={210}
                    src="/assets/image-logo.png"
                    alt="Upload Icon"
                  />
                  <p className="text-gray-600 text-xl text-center mt-6">
                    {isDragActive
                      ? "Drop Here to Upload"
                      : "Drag & Drop Your Image Here or Click to Select"}
                  </p>
                  <p className="text-lg text-gray-500 mt-4">
                    Support: PNG, JPG, JPEG, GIF
                  </p>
                </>
              )}
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center mt-8">
                <p className="text-xl text-blue-600">Uploading...</p>
                <div className="mt-6 w-96 rounded-full bg-gray-300">
                  <div className="h-3 w-1/2 rounded-full bg-blue-600"></div>
                </div>
              </div>
            ) : (
              selectedImage && (
                <button
                  onClick={handleRedirect}
                  className="mt-8 flex h-12 w-64 items-center justify-center rounded-3xl bg-primary text-center text-lg font-semibold text-white shadow-lg hover:shadow-md"
                >
                  Upload Image
                </button>
              )
            )}

            <button
              onClick={toggleModal}
              className="absolute right-6 top-6 text-3xl text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;