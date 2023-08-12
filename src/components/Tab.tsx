import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const TitleBox = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  font-family: "Walter Turncoat", cursive;
  font-size: 35px;
`;

const MenuBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const MenuIconStyle = styled.li`
  width: 60px;
  height: 60px;
  border: 2px solid #f0f0f0;
  border-radius: 30%;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #fdfdfd;
  color: #727272;
  font-family: "Walter Turncoat", cursive;
`;

const Tab = () => {
  return (
    <HeaderStyle>
      <TitleBox>Practice for Recoil</TitleBox>
      <MenuBox>
        <li>
          <MenuIconStyle>
            <Link to="/input">Input</Link>
          </MenuIconStyle>
        </li>
        <li>
          <MenuIconStyle>
            <Link to="/list">Todo</Link>
          </MenuIconStyle>
        </li>
      </MenuBox>
    </HeaderStyle>
  );
};

export default Tab;
