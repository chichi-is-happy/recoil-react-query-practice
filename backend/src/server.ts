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

  const todoToDelete = todos.find((todo) => todo.id === +id);

  if (!todoToDelete) {
    return res.status(404).json({ message: "Todo를 찾을 수 없습니다." });
  }

  const deletedTodoList = todos.filter((todo) => todo.id !== todoToDelete.id);

  res.json(deletedTodoList);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
