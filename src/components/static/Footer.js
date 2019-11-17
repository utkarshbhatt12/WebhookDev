import React from "react";
import { Container } from "@material-ui/core";

const styles = {
  container: {
    background: "lightgray",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "2.5rem"
  }
};

function Footer() {
  return (
    <Container style={styles.container}>
      <div>Hi, I'm the footer.</div>
    </Container>
  );
}

export default Footer;
