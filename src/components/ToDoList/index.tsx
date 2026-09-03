import { useState, type ChangeEvent } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaksTitle] = useState("");

  const handleCreateTaks = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false,
    };

    setTasks((state) => [...state, newTask]);
    setTaksTitle("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaksTitle(event.target.value);
  };

  const toggleTask = (id: string) => {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="p-6 font-sans bg-white text-black rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Gerenciador de Tarefas</h2>

      <form onSubmit={handleCreateTaks} className="mb-4">
        <input
          type="text"
          placeholder="Lavar o carro..."
          value={taskTitle}
          onChange={handleInputChange}
          className="p-2 mr-2 w-60 border border-gray-500"
        />
        <button type="submit" className="p-2 border hover:cursor-pointer">
          Adicionar
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`hover:cursor-pointer px-1 py-1 ${task.completed ? "line-through bg-green-500 text-white" : "none text-black"}`}
          >{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
