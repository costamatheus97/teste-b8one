import React, { Component } from "react";

import api from "../../services/api";

import { DetailedInfo } from "../../styles/styles";

export default class ComicsPage extends Component {
  state = {
    comics: []
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

    this.setState({ comics: response.data.data.results });
  };

  render() {
    const { comics } = this.state;
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
          </article>
        ))}
      </DetailedInfo>
    );
  }
}
