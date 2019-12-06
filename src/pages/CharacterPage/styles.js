import styled from "styled-components";

export const CharacterInfo = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  article {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    margin-right: 50px;
    width: 50%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 4px;
    }

    strong {
      margin-top: 10px;
      font-size: 36px;
    }
    p {
      font-size: 18px
      margin-top: 20px;
      max-width: 400px;
      text-align: center;
    }
  }
`;
