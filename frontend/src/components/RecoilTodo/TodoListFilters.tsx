import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../recoilState/recoilState";
import { useEffect } from "react";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }: any) => {
    setFilter(value);
  };

  useEffect(() => console.log("filter: ", filter), [filter]);

  return (
    <select value={filter} onChange={updateFilter}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">UnCompleted</option>
    </select>
  );
};

export default TodoListFilters;
