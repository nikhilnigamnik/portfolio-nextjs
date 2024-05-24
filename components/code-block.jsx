"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

const CodeBlock = ({ children }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
  };

  return (
    <div className="relative">
      <button className="absolute right-4 top-4" onClick={copy}>
        {isCopied ? (
          <CheckIcon className="text-white" />
        ) : (
          <CopyIcon className="text-white" />
        )}
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={gruvboxDark}
        showLineNumbers
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
