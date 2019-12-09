import React, { Component } from "react";

import api from "../../services/api";

import { DetailedInfo } from "../../styles/styles";

export default class EventPage extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.loadEvent();
  }

  loadEvent = async () => {
    const { params } = this.props.match;

    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const response = await api.get(
      `events/${params.id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ events: response.data.data.results });
  };

  render() {
    const { events } = this.state;

    return (
      <DetailedInfo>
        {events.map(event => (
          <article key={event.id}>
            <img src={event.thumbnail.path + "/portrait_uncanny.jpg"} alt="" />
            <strong>{event.title}</strong>
            <p>{event.description}</p>
            <h1>Featured Characters</h1>
            {events.map(featuredCharacters =>
              featuredCharacters.characters.items.map(comic => (
                <li>{comic.name}</li>
              ))
            )}
          </article>
        ))}
      </DetailedInfo>
    );
  }
}
