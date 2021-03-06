import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { DetailedInfo, Loading } from "../../styles/styles";

export default class ComicsPage extends Component {
  state = {
    comics: [],
    loading: true
  };

  componentDidMount() {
    this.loadComics();
  }

  loadComics = async () => {
    const { params } = this.props.match;

    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const response = await api.get(
      `comics/${params.id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ comics: response.data.data.results, loading: false });
  };

  render() {
    const { comics, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <h1>Loading...</h1>
        </Loading>
      );
    }

    return (
      <DetailedInfo>
        {comics.map(comicsInfo => (
          <article key={comicsInfo.id}>
            <img
              src={comicsInfo.thumbnail.path + "/portrait_uncanny.jpg"}
              alt=""
            />
            <strong>{comicsInfo.title}</strong>
            <p>{comicsInfo.description}</p>
            <h1>Featured Characters</h1>
            {comics.map(featuredCharacters =>
              featuredCharacters.characters.items.map(character => (
                <li>
                  <Link to={"/characters/" + character.resourceURI.slice(47)}>
                    {character.name}
                  </Link>
                </li>
              ))
            )}
          </article>
        ))}
      </DetailedInfo>
    );
  }
}
