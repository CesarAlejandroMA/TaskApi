using Microsoft.EntityFrameworkCore;
using TaskApi.Models;

namespace TaskApi.Data
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options)
            : base(options) { }

        public DbSet<TaskItem> TaskItems => Set<TaskItem>();

        //  reglas de base de datos
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // 1) índice único en Title
            builder.Entity<TaskItem>()
                   .HasIndex(t => t.Title)
                   .IsUnique();

            // 2) CHECK que impide cadenas vacías o solo espacios
            builder.Entity<TaskItem>()
                   .HasCheckConstraint(
                       "CK_TaskItems_Title_NotEmpty",
                       "LEN(LTRIM(RTRIM([Title]))) > 0");
        }

    }
}
