namespace TaskApi.Models
{
    public class TaskItem
    {

        public int Id { get; set; }               // PK autoincremental
        public string Title { get; set; } = string.Empty; // requerido
        public bool IsCompleted { get; set; }

    }
}
