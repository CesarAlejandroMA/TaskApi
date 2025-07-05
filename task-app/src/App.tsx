import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
<>
      <main className="min-h-screen flex items-start justify-center pt-12 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold mb-6 text-center underline decoration-blue-500/50">
            Tareas
          </h1>

          <TaskList />
          <TaskForm />
        </div>
      </main>

      <Toaster position="top-center" />
    </>
  );
}
