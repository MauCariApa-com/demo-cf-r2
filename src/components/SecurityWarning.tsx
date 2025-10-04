"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from "lucide-react";

export const SecurityWarning: React.FC = () => {
  return (
    <div className="mt-8 p-4 bg-red-100 dark:bg-red-950 border border-red-300 dark:border-red-700 rounded-md text-red-800 dark:text-red-200 flex items-center gap-2 max-w-md mx-auto">
      <AlertTriangle className="h-5 w-5 flex-shrink-0" />
      <Label className="text-sm font-medium">
        WARNING: R2 keys are exposed on the client side. This is HIGHLY INSECURE for production. Read Acknowledge to secure your credentials.
      </Label>
    </div>
  );
};