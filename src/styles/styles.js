import styled from "styled-components";

export const DetailedInfo = styled.div`
  color: white;
  margin: 150px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  article {
    padding: 40px 0px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    margin-right: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 4px;
    }

    strong {
      margin-top: 20px;
      font-size: 48px;
      text-align: center;
    }

    p {
      font-size: 18px
      margin-top: 20px;
      max-width: 400px;
      text-align: center;
    }

    h1{
      font-size: 38px;
      margin: 30px 0px
    }

    li{
      margin: 5px 0px
    }
  }
`;

export const GridContainer = styled.div`
  color: white;
  list-style: none;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 150px;

    article {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    margin-right: 50px;
    margin-bottom: 50px;
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
  }

div.actions{


  button {
    margin: 0px 100px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 5px;
    width: 130px;
    padding: 5px 0px
    margin-bottom: 50px;
    transition: 0.5s;

    &:hover{
      background: #B7BCB9;
    }
  }

  span{
    color: #FFF;
    margin-bottom: 50px;
    font-size: 28px
  }
}
`;

export const FilterContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 30%;
  min-width: 400px;
  margin: 150px 100px 50px 50px;
  padding-right: 50px;
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
