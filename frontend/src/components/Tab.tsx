import { Link } from "react-router-dom";
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
  font-size: 22px;
`;

const MenuBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const MenuIconStyle = styled.li`
  width: 60px;
  height: 60px;
  border: 1.3px solid #f0f0f0;
  border-radius: 35%;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #fdfdfd;
  color: #727272;
  font-family: "Walter Turncoat", cursive;
  font-size: 0.8rem;
`;

const Tab = () => {
  return (
    <HeaderStyle>
      <TitleBox>Practice for Recoil & React Query</TitleBox>
      <MenuBox>
        <MenuIconStyle>
          <Link to="/input">Input</Link>
        </MenuIconStyle>

        <MenuIconStyle>
          <Link to="/list">Todo</Link>
        </MenuIconStyle>

        <MenuIconStyle>
          <Link to="/test">Test</Link>
        </MenuIconStyle>
      </MenuBox>
    </HeaderStyle>
  );
};

export default Tab;
