import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { GridContainer, FilterContainer, Main } from "../../styles/styles";

export default class ComicPage extends Component {
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
      `comics?limit=20&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ comics: response.data.data.results });
  };

  render() {
    const { characters, comics } = this.state;
    return (
      <Main>
        <FilterContainer>
          <h1>Filter by Character</h1>
          {characters.map(character => (
            <p key={character.id}>{character.name}</p>
          ))}
        </FilterContainer>
        <GridContainer>
          {comics.map(comic => (
            <article key={comic.id}>
              <img src={comic.thumbnail.path + "/portrait_small.jpg"} alt="" />
              <strong>
                <Link to={"/comics/" + comic.id}>{comic.title}</Link>
              </strong>
            </article>
          ))}
        </GridContainer>
      </Main>
    );
  }
}
