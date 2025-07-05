import Loader from "./Loader";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  useTasks,
  useToggleComplete,
  useDeleteTask,
} from "../services/tasks";

export default function TaskList() {
const { data = [], isLoading, isFetching, error } = useTasks();
  const toggle = useToggleComplete();
  const remove = useDeleteTask();
  const toastId = useRef<string | undefined>(undefined);

useEffect(() => {
const stillLoading = isLoading || (isFetching && data.length === 0);

    // ⬆️ Mostrar toast solo si estamos cargando y aún no hay uno
    if (stillLoading && toastId.current === undefined) {
      toastId.current = toast.loading("Cargando datos…");
    }

    // ⬇️ Cuando deja de cargar: cerrar y limpiar ref
    if (!stillLoading && toastId.current !== undefined) {
      toast.dismiss(toastId.current);
      toastId.current = undefined;           // ← IMPORTANTE
    }

    // ⬇️ Si hubo error: mostrar toast de error (y limpiar por si acaso)
    if (error) {
      toast.dismiss(toastId.current);
      toastId.current = undefined;
      toast.error("Error al obtener datos");
    }
  }, [isLoading, isFetching, data.length, error]);
  // --------------------------------------------------

// ①  loading inicial
  if (isLoading && data.length === 0) return <Loader />;
  // ②  error
  if (error)     return null;       // el toast ya informa del error

  return (
    <>
          {/* ③  spinner flotante cada vez que se re-fetch (crear, borrar, etc.) */}
      {isFetching &&(
        <div className="absolute right-4 top-4">
          <Loader />
        </div>
      )}

    <ul className="space-y-3">
      {data.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between bg-slate-200 text-slate-800 p-3 rounded-lg shadow"
        >
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 accent-green-600"
              checked={t.isCompleted}
              onChange={() => toggle.mutate(t)}
            />
            <span className={t.isCompleted ? "line-through" : ""}>{t.title}</span>
          </label>

          <button
            onClick={() => remove.mutate(t.id)}
            className="ml-2 text-red-600 hover:underline"
            title="Eliminar tarea"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}
