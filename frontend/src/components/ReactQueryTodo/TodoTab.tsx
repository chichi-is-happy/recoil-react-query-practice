import React from "react";
import { useRecoilState } from "recoil";
import { todoFilterState } from "../../../src/recoilState/todoState";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  color: #727272;
  cursor: default;
`;

const TodoTab = () => {
  const [todoList, setTodoList] = useRecoilState(todoFilterState);

  const updateFilter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const value = target.getAttribute("data-value");
    if (value) {
      setTodoList(value);
    }
  };

  return (
    <Container>
      <div data-value="All" onClick={updateFilter}>
        All
      </div>
      <div data-value="Open" onClick={updateFilter}>
        Open
      </div>
      <div data-value="Closed" onClick={updateFilter}>
        Closed
      </div>
    </Container>
  );
};

export default TodoTab;
