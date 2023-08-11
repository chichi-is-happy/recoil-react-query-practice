import React from "react";
import { RecoilRoot } from "recoil";
import TextInput from "./components/InputTest/TextInput";
import CharacterCounter from "./components/InputTest/CharacterCounter";
import "./App.css";
import TodoList from "../src/components/Todo/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
const App = () => {
  return (
    <Router>
      <Tab />
      <RecoilRoot>
        <div>
          <Routes>
            <Route path="/input" element={<TextInput />} />
            <Route path="/list" element={<TodoList />} />
          </Routes>
        </div>
      </RecoilRoot>
    </Router>
  );
};

export default App;
