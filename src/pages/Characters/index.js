import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import {
  GridContainer,
  FilterContainer,
  Main,
  Loading
} from "../../styles/styles";

export default class Characters extends Component {
  state = {
    characters: [],
    comics: [],
    comicsID: 0,
    currentPage: 1,
    limit: 20,
    offset: 0,
    loading: true,
    maxPages: Math.ceil(1493 / 20),
    ts: "matheus",
    apikey: "1f846d9393d689a95848726eb7b1d627",
    hash: "a88aadcdd89db54567d8c93b86998c82"
  };

  componentDidMount() {
    this.loadCharacters();
    this.loadComics();
  }

  loadCharacters = async () => {
    const { offset, limit, ts, apikey, hash } = this.state;

    const response = await api.get(
      `characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ characters: response.data.data.results, loading: false });
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
    const { comicsID, ts, apikey, hash } = this.state;

    const response = await api.get(
      `comics/${comicsID}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`
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

  handleFilter = async data => {
    const buttonValue = data.target.id;
    await this.setState({ comicsID: buttonValue });
    this.loadFilteredCharacters();
  };

  render() {
    const { characters, comics, currentPage, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <h1>Loading...</h1>
        </Loading>
      );
    }

    return (
      <Main>
        <FilterContainer>
          <h1>Filter by Comic</h1>
          {comics.map(comic => (
            <button
              type="submit"
              id={comic.id}
              key={comic.id}
              onClick={this.handleFilter}
            >
              {comic.title}
            </button>
          ))}
        </FilterContainer>
        <GridContainer>
          <div className="grid">
            {characters.map(character => (
              <article key={character.id}>
                <img
                  src={character.thumbnail.path + "/portrait_small.jpg"}
                  alt=""
                />
                <strong>
                  <Link to={"/characters/" + character.id}>
                    {character.name}
                  </Link>
                </strong>
              </article>
            ))}
          </div>
          <div className="actions">
            <button onClick={this.prevPage}>Previous Page</button>
            <span>Page {currentPage}</span>
            <button onClick={this.nextPage}>Next Page</button>
          </div>
        </GridContainer>
      </Main>
    );
  }
}
