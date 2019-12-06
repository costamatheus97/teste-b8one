import styled from "styled-components";

export const CharactersContainer = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  list-style: none;
  margin-top: 50px;

  article {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    margin-right: 50px;
    max-width: 200px;
    max-height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.5);

    img {
      border-radius: 50%;
    }
    strong {
      margin-left: 20px;
    }
  }
`;

export const ComicsContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 40%;
  margin: 50px 0px;
  border-radius: 4px;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.5);
  h1 {
    color: white;
    display: flex;
    justify-content: center;
    margin: 30px 0px;
  }
  p {
    margin-left: 50px;
    margin-bottom: 5px;
    color: white;
    font-size: 18px;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
`;
