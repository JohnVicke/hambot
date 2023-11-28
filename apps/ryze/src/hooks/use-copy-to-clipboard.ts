"use client";

import React from "react";

function copyToClipboard(text: string) {
  void window.navigator.clipboard.writeText(text);
}

export function useCopyToClipboard() {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const id = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(id);
    }
  }, [copied, setCopied]);

  const copy = (text: string) => {
    copyToClipboard(text);
    setCopied(true);
  };

  return { copied, copy };
}
