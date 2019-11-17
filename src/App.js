import React, { useState } from "react";
import Header from "./components/static/Header";
import JSONView from "./components/response/JSONView";
import { Container } from "@material-ui/core";

const styles = {
  container: {
    backgroundColor: "lightgray",
    paddingTop: 16
  }
};

function App() {
  const [body, setBody] = useState({});
  const [headers, setHeaders] = useState({});
  const [query, setQuery] = useState({});

  return (
    <div>
      <Header />
      <Container style={styles.container} maxWidth="md">
        <JSONView codeString={""} />
      </Container>
    </div>
  );
}

export default App;
