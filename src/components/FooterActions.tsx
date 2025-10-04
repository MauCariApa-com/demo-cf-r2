"use client";

import { LicenseInfo } from "./LicenseInfo";
import { AcknowledgeInfo } from "./AcknowledgeInfo";
import { SupportButton } from "./SupportButton";
import { GitHubButton } from "./GitHubButton"; // Import the new GitHubButton

export const FooterActions = () => {
  return (
    <div className="p-4 text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <SupportButton />
      <GitHubButton /> {/* Add the GitHubButton here */}
      <LicenseInfo />
      <AcknowledgeInfo />
    </div>
  );
};