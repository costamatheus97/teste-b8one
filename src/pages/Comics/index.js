import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { GridContainer, FilterContainer, Main } from "../../styles/styles";

export default class ComicPage extends Component {
  state = {
    characters: [],
    comics: [],
    currentPage: 1,
    comicsPerPage: 20,
    maxPages: Math.ceil(46010 / 20),
    offset: 0
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
      `characters?limit=60&ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    this.setState({ characters: response.data.data.results });
  };

  loadComics = async () => {
    const ts = "matheus";
    const apikey = "1f846d9393d689a95848726eb7b1d627";
    const hash = "a88aadcdd89db54567d8c93b86998c82";

    const { offset, comicsPerPage } = this.state;

    const response = await api.get(
      `comics?offset=${offset}&limit=${comicsPerPage}&ts=${ts}&apikey=${apikey}&hash=${hash}`
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

  render() {
    const { characters, comics, currentPage } = this.state;
    return (
      <Main>
        <FilterContainer>
          <h1>Filter by Character</h1>
          {characters.map(character => (
            <p key={character.id}>{character.name}</p>
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
