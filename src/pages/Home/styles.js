import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  h1 {
    color: white;
    font-size: 72px;
    text-align: center;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    input {
      width: 35%;
      height: 50px;
      margin-top: 50px;
      font-size: 28px;
      padding-left: 20px;
    }

    button {
      margin-top: 50px;
      padding: 10px 50px;
      background: white;
      border: none;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
