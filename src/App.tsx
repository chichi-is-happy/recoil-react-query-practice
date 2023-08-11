import React from "react";
import { RecoilRoot } from "recoil";
import TextInput from "./components/InputTest/TextInput";
import CharacterCounter from "./components/InputTest/CharacterCounter";
import "./App.css";
import TodoList from "../src/components/Todo/TodoList";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <TextInput />
        <CharacterCounter />
      </div>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
