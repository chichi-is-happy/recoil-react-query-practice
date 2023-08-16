import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../recoilState/recoilState";

const TodoListStats = () => {
  const todoStats = useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(
    todoStats.percentCompleted * 100
  );
  return (
    <ul>
      <li>Total Todos : {todoStats.totalNum}</li>
      <li>Completed Todos : {todoStats.totalCompletedNum}</li>
      <li>UnCompleted Todos : {todoStats.totalUnCompletedNum}</li>
      <li>Percent Completed : {formattedPercentCompleted}%</li>
    </ul>
  );
};

export default TodoListStats;
