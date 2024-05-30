"use client";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaPaste } from "react-icons/fa";

const Code = ({
  children,
  language,
}: {
  children: string;
  language: string;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="relative text-xs">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className="absolute right-4 top-4 z-[5] cursor-pointer border-none bg-none outline-none">
          {copied ? <FaPaste /> : <FaCopy />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
