import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../lib/api";
import { toast } from "react-hot-toast";

export type Task = { id: number; title: string; isCompleted: boolean };

export const useTasks = () =>
  useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => (await api.get<Task[]>("/task")).data,
    initialData: [],
  });

export const useAddTask = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (title: string) => api.post("/task", { title: title.trim() }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Tarea añadida");
    },
    onError: (e: any) => {
      const msg =
        e?.response?.status === 409
          ? "Título repetido"
          : "Error al crear tarea";
      toast.error(msg);
    },
  });
};

export const useToggleComplete = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (task: Task) =>
      api.put(`/task/${task.id}`, { ...task, isCompleted: !task.isCompleted }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
    onError: () => toast.error("Error al actualizar"),
  });
};

export const useDeleteTask = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => api.delete(`/task/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Eliminada");
    },
    onError: () => toast.error("Error al eliminar"),
  });
};
