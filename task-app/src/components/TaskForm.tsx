import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddTask } from "../services/tasks";

const schema = yup
  .object({
    title: yup
      .string()
      .trim()                 // elimina espacios al inicio/fin
      .required("Título obligatorio"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function TaskForm() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const addTask = useAddTask();

  const onSubmit = (data: FormData) => {
    addTask.mutate(data.title, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mt-6">
      <input
        {...register("title")}
        placeholder="Nueva tarea…"
        className="flex-1 rounded border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 active:bg-blue-800"
      >
        Añadir
      </button>
    </form>
  );
}
