import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { GridContainer, FilterContainer, Main } from "../../styles/styles";

export default class Characters extends Component {
  state = {
    characters: [],
    comics: [],
    comicsID: 0,
    currentPage: 1,
    limit: 20,
    offset: 0,
    maxPages: Math.ceil(1493 / 20)
  };

  componentDidMount() {
    this.loadCharacters();
    this.loadComics();
  }

  loadCharacters = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";
    const { offset, limit } = this.state;

    const response = await api.get(
      `characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
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

  loadFilteredCharacters = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const { comicsID } = this.state;

    const response = await api.get(
      `comics/${comicsID}/characters?limit=50&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ characters: response.data.data.results });
  };

  prevPage = async () => {
    const { currentPage, offset } = this.state;

    if (currentPage <= 1) {
      this.setState({ currentPage: 1 });
    } else {
      this.setState({ currentPage: currentPage - 1 });
    }
    if (offset <= 0) {
      this.setState({ offset: 0 });
    } else {
      await this.setState({ offset: offset - 20 });
    }
    this.loadCharacters();
  };

  nextPage = async () => {
    const { currentPage, offset, maxPages } = this.state;

    if (currentPage >= maxPages) {
      this.setState({ currentPage: maxPages });
    } else {
      this.setState({ currentPage: currentPage + 1 });
    }

    if (offset == 1480) {
      await this.setState({ offset: offset + 13 });
    }
    if (offset >= 1493) {
      await this.setState({ offset: 1480 });
    } else {
      await this.setState({ offset: offset + 20 });
    }
    this.loadCharacters();
  };

  render() {
    const { characters, comics, currentPage } = this.state;
    return (
      <Main>
        <FilterContainer>
          <h1>Filter by Comic</h1>
          {comics.map(comic => (
            <p key={comic.id}>{comic.title}</p>
          ))}
        </FilterContainer>
        <GridContainer>
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
          <div>
            <button onClick={this.prevPage}>Previous Page</button>
            <span>Page {currentPage}</span>
            <button onClick={this.nextPage}>Next Page</button>
          </div>
        </GridContainer>
      </Main>
    );
  }
}
