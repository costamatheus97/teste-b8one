import React, { Component } from "react";

import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h1>EXPLORE MARVEL COMICS AND CHARACTERS</h1>
        <input type="text" placeholder="Search event" />
        <button type="submit">SEARCH</button>
      </Container>
    );
  }
}
