import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { DetailedInfo, Loading } from "../../styles/styles";

export default class EventPage extends Component {
  state = {
    events: [],
    loading: true
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

    this.setState({ events: response.data.data.results, loading: false });
  };

  render() {
    const { events, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <h1>Loading...</h1>
        </Loading>
      );
    }

    return (
      <DetailedInfo>
        {events.map(event => (
          <article key={event.id}>
            <img src={event.thumbnail.path + "/portrait_uncanny.jpg"} alt="" />
            <strong>{event.title}</strong>
            <p>{event.description}</p>
            <div className="featured">
              <div className="featuredCharacters">
                <h1>Featured Characters</h1>
                {events.map(featuredCharacters =>
                  featuredCharacters.characters.items.map(character => (
                    <li>
                      <Link
                        to={"/characters/" + character.resourceURI.slice(47)}
                      >
                        {character.name}
                      </Link>
                    </li>
                  ))
                )}
              </div>
              <div className="featuredComics">
                <h1>Featured Comics</h1>
                {events.map(featuredComics =>
                  featuredComics.comics.items.map(comics => (
                    <li>
                      <Link to={"/comics/" + comics.resourceURI.slice(43)}>
                        {comics.name}
                      </Link>
                    </li>
                  ))
                )}
              </div>
            </div>
          </article>
        ))}
      </DetailedInfo>
    );
  }
}
