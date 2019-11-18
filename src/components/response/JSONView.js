// will contain Headers, Query or body json in formatted form.
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace } from "react-syntax-highlighter/dist/esm/styles/prism";

function JSONView({ showLineNumber, codeString }) {
  return (
    <SyntaxHighlighter
      showLineNumbers={showLineNumber}
      wrapLines
      language="bash"
      style={duotoneSpace}
    >
      {JSON.stringify(codeString || {}, " ", 2)}
    </SyntaxHighlighter>
  );
}

export default JSONView;
