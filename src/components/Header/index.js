import React from "react";
import { Link } from "react-router-dom";

import { PageHeader } from "./styles";

import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <PageHeader>
      <Link to="/">
        <img src={Logo} width="250px" height="200px" alt="" />
      </Link>
      <div>
        <a href="/characters">Characters</a>
        <a href="/events">Comics</a>
      </div>
    </PageHeader>
  );
}
