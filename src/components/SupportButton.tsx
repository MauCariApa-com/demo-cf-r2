"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const SupportButton: React.FC = () => {
  return (
    <a href="https://www.paypal.me/kodester/" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600 hover:text-white">
        <Heart className="h-4 w-4 text-red-200" />
        Support Me
      </Button>
    </a>
  );
};