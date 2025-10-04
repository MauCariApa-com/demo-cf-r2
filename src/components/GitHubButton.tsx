"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const GitHubButton: React.FC = () => {
  // Menggunakan URL placeholder. Anda dapat menggantinya dengan URL repositori GitHub Anda.
  const githubRepoUrl = "https://github.com/kodester/cloudflare-r2-uploader-demo"; 

  return (
    <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white">
        <Github className="h-4 w-4" />
        GitHub
      </Button>
    </a>
  );
};