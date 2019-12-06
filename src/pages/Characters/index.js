import React, { Component } from "react";
import api from "../../services/api";
import { Link, BrowserRouter, Route } from "react-router-dom";

import { CharactersContainer, ComicsContainer, Main } from "./styles";
import CharacterPage from "../CharacterPage";

export default class Characters extends Component {
  state = {
    characters: [],
    comics: [],
    currentPage: 1,
    charactersPerPage: 5,
    maxPages: 50
  };

  componentDidMount() {
    this.loadCharacters();
    this.loadComics();
  }

  loadCharacters = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const response = await api.get(
      `characters?limit=30&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ characters: response.data.data.results });
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
    const { characters, comics } = this.state;
    return (
      <Main>
        <ComicsContainer>
          <h1>Filter by Comic</h1>
          {comics.map(comic => (
            <p key={comic.id}>{comic.title}</p>
          ))}
        </ComicsContainer>
        <CharactersContainer>
          {characters.map(character => (
            <article key={character.id}>
              <img
                src={character.thumbnail.path + "/portrait_small.jpg"}
                alt=""
              />
              <strong>
                <Link to={"/characters/" + character.id}>{character.name}</Link>
              </strong>
            </article>
          ))}
        </CharactersContainer>
      </Main>
    );
  }
}
