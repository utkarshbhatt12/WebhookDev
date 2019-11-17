// will contain Headers, Query or body json in formatted form.
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function JSONView(props) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      wrapLines
      language="json"
      style={duotoneLight}
    >
      {JSON.stringify(props.codeString || {}, " ", 2)}
    </SyntaxHighlighter>
  );
}

export default JSONView;
