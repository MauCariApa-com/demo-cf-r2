"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const acknowledgeContent = `The primary goal of this application is to provide a clear, working example of client-side interaction with R2 using the AWS SDK for JavaScript. The core logic in this app can be adapted for various projects, such as:
* Inventory systems (for storing item photos)
* Blogs (for managing images and media)
* Internal HR systems (for employee documents)
* Job sites (for resumes and portfolios)
* And many other applications requiring secure and scalable object storage.`;

// Helper function to render simple markdown for bold and code
const renderMarkdown = (text: string) => {
  // Replace **bold** with <strong>bold</strong>
  let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Replace `code` with <code>code</code>
  processedText = processedText.replace(/`(.*?)`/g, '<code>$1</code>');
  return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
};

export const AcknowledgeInfo: React.FC = () => {
  // Split the content into the initial paragraph and list items
  const parts = acknowledgeContent.split('\n*');
  const paragraph = parts[0].trim();
  const listItems = parts.slice(1).map(item => item.trim());

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Info className="h-4 w-4" />
          Purpose
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Project Goal</DialogTitle>
          <DialogDescription>
            The primary goal of this application.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
          <p className="mb-4">
            {renderMarkdown(paragraph)}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="pl-2">
                {renderMarkdown(item)}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};