import styled from "styled-components";

export const PageHeader = styled.ul`
  @import url("https://fonts.googleapis.com/css?family=Architects+Daughter|Bubbler+One|Marvel|Michroma|Nothing+You+Could+Do|Over+the+Rainbow|Permanent+Marker|Syncopate|Waiting+for+the+Sunrise&display=swap");
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-top: 20px;
  height: 75px;

  div {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 28px;
      font-weight: bold;
      width: 200px;
      text-decoration: none;
      margin-left: 50px;
      font-family: Marvel;
    }
  }
`;
