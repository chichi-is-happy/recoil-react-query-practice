import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

interface Todo {
  id: number;
  userId: number;
  todoItem: string;
  completed: boolean;
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
