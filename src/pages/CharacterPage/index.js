import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { DetailedInfo } from "../../styles/styles";

export default class CharacterPage extends Component {
  state = {
    character: []
  };

  componentDidMount() {
    this.loadCharacters();
    this.loadComics();
  }

  loadCharacters = async () => {
    const { params } = this.props.match;

    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const response = await api.get(
      `characters/${params.id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ character: response.data.data.results });
  };

  loadComics = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const response = await api.get(
      `comics?limit=50&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ comics: response.data.data.results });
  };
  render() {
    const { character } = this.state;
    return (
      <>
        <DetailedInfo>
          {character.map(characterInfo => (
            <article key={characterInfo.id}>
              <img
                src={characterInfo.thumbnail.path + "/portrait_uncanny.jpg"}
                alt=""
              />
              <strong>{characterInfo.name}</strong>
              <p>{characterInfo.description}</p>
              <h1>Featured In</h1>
              {character.map(featuredComics =>
                featuredComics.comics.items.map(comic => (
                  <li>
                    <Link to={"/comics/" + comic.resourceURI.slice(43)}>
                      {comic.name}
                    </Link>
                  </li>
                ))
              )}
            </article>
          ))}
        </DetailedInfo>
      </>
    );
  }
}
