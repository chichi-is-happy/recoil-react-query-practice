import React from "react";
import { RecoilRoot } from "recoil";
import TextInput from "./components/InputTest/TextInput";
import CharacterCounter from "./components/InputTest/CharacterCounter";
import "./App.css";
import TodoList from "../src/components/Todo/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
import styled from "styled-components";

const App = () => {
  const ContainerStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fdfdfd;
    display: grid;
    justify-content: center;
    /* grid-template-rows: auto 1fr auto; */
  `;

  const MobileStyle = styled.div`
    width: 480px;
    border: 10px solid #fff3f7;
    border-radius: 10%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `;

  const HeaderStyle = styled.header`
    padding: 1rem;
    background-color: #fae2ea;
    color: white;
    display: grid;
    align-items: center;
  `;

  const ContentStyle = styled.div`
    padding: 1rem;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    font-family: "Walter Turncoat", cursive;
  `;

  return (
    <Router>
      <ContainerStyle>
        <MobileStyle>
          <HeaderStyle>
            <Tab />
          </HeaderStyle>
          <ContentStyle>
            <RecoilRoot>
              <div>
                <Routes>
                  <Route path="/input" element={<TextInput />} />
                  <Route path="/list" element={<TodoList />} />
                </Routes>
              </div>
            </RecoilRoot>
          </ContentStyle>
        </MobileStyle>
      </ContainerStyle>
    </Router>
  );
};

export default App;
