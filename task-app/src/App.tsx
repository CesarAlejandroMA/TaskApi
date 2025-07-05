import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
<>
      <main className="min-h-screen w-full flex justify-center bg-slate-100 py-12">
        <div className="w-full max-w-md space-y-6 px-4">
          <h1 className="text-4xl font-extrabold text-center">
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
