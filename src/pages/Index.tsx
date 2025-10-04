"use client";

import { FooterActions } from "@/components/FooterActions"; // Import the renamed component
import R2Uploader from "@/components/R2Uploader";
import { SecurityWarning } from "@/components/SecurityWarning";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          Demo R2 Upload App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Select a file to upload it directly to Cloudflare R2.
        </p>
      </div>
      <R2Uploader /> {/* Render the R2Uploader component */}
      <SecurityWarning /> {/* Render the security warning here */}
      <FooterActions />
    </div>
  );
};

export default Index;