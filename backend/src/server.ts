import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

interface Todo {
  id: number;
  userId: number;
  todoItem: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];
let idCounter = 1;

app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const newTodo: Todo = { ...req.body, id: idCounter++ };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { todoItem, isCompleted } = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === +id);

  if (!todoToUpdate) {
    return res.status(404).json({ message: "Todo를 찾을 수 없습니다." });
  }

  todoToUpdate.todoItem = todoItem;
  todoToUpdate.isCompleted = isCompleted;

  res.json(todoToUpdate);
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id === +id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo를 찾을 수 없습니다." });
  }

  todos.splice(todoIndex, 1);

  res.status(200).json({ message: "Todo가 성공적으로 삭제되었습니다." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
