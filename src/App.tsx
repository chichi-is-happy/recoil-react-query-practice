import React from "react";
import { RecoilRoot } from "recoil";
import TextInput from "./TextInput";
import CharacterCounter from "./CharacterCounter";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <TextInput />
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
};

export default App;
