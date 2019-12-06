import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../assets/images/background.jpg";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: white;

  body{
    background: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, button{
    font: 14px Marvel, sans-serif;
  }

  #root{
    max-width: 100vw;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
    color: #000
  }
}
`;
