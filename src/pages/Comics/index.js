import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import {
  GridContainer,
  FilterContainer,
  Main,
  Loading
} from "../../styles/styles";

export default class ComicPage extends Component {
  state = {
    characters: [],
    comics: [],
    characterID: [],
    currentPage: 1,
    comicsPerPage: 20,
    maxPages: Math.ceil(46010 / 20),
    offset: 0,
    loading: true,
    ts: "matheus",
    apikey: "1f846d9393d689a95848726eb7b1d627",
    hash: "a88aadcdd89db54567d8c93b86998c82"
  };

  componentDidMount() {
    this.loadCharacters();
    this.loadComics();
  }

  loadCharacters = async () => {
    const { ts, apikey, hash } = this.state;

    const response = await api.get(
      `characters?limit=60&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ characters: response.data.data.results, loading: false });
  };

  loadComics = async () => {
    const { offset, comicsPerPage, ts, apikey, hash } = this.state;

    const response = await api.get(
      `comics?offset=${offset}&limit=${comicsPerPage}&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ comics: response.data.data.results });
  };

  loadFilteredComics = async () => {
    const { characterID, offset, comicsPerPage, ts, apikey, hash } = this.state;

    const response = await api.get(
      `characters/${characterID}/comics?offset=${offset}&limit=${comicsPerPage}&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ comics: response.data.data.results });
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
    this.loadComics();
  };

  nextPage = async () => {
    const { currentPage, offset, maxPages } = this.state;

    if (currentPage >= maxPages) {
      this.setState({ currentPage: maxPages });
    } else {
      this.setState({ currentPage: currentPage + 1 });
    }

    if (offset == 46000) {
      await this.setState({ offset: offset + 10 });
    }
    if (offset >= 46010) {
      await this.setState({ offset: 46010 });
    } else {
      await this.setState({ offset: offset + 20 });
    }
    console.log(offset);
    this.loadComics();
  };

  handleFilter = async data => {
    const buttonValue = data.target.id;
    await this.setState({
      characterID: buttonValue,
      currentPage: 1,
      offset: 0
    });
    this.loadFilteredComics();
    console.log(buttonValue);
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
          <h1>Filter by Character</h1>
          {characters.map(character => (
            <button
              type="submit"
              id={character.id}
              key={character.id}
              onClick={this.handleFilter}
            >
              {character.name}
            </button>
          ))}
        </FilterContainer>
        <GridContainer>
          <div className="grid">
            {comics.map(comic => (
              <article key={comic.id}>
                <img
                  src={comic.thumbnail.path + "/portrait_small.jpg"}
                  alt=""
                />
                <strong>
                  <Link to={"/comics/" + comic.id}>{comic.title}</Link>
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
