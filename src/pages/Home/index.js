import React, { Component } from "react";

import api from "../../services/api";

import { Container } from "./styles";

export default class Home extends Component {
  state = {
    event: "",
    eventData: []
  };

  componentDidUpdate() {
    this.loadEvent();
  }

  loadEvent = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const { event } = this.state;

    const response = await api.get(
      `events?nameStartsWith=${event}&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ eventData: response.data.data.results });
  };

  handleInputChange = data => {
    const searchValue = data.target.value.split(" ").join("+");
    this.setState({ event: searchValue });
  };

  handleSubmit = data => {
    const { eventData } = this.state;

    data.preventDefault();

    const eventID = eventData.map(event => event.id);
    const firstEvent = eventID[0];
    console.log(firstEvent);

    window.location.href = `/events/${firstEvent}`;
  };

  render() {
    return (
      <Container>
        <h1>EXPLORE MARVEL COMICS AND CHARACTERS</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search event"
            onChange={this.handleInputChange}
          />
          <button type="submit">SEARCH</button>
        </form>
      </Container>
    );
  }
}
