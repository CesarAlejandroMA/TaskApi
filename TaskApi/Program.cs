using Microsoft.EntityFrameworkCore;
using TaskApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//Registrar servicio para la conexión
builder.Services.AddDbContext<TaskDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


//Ajuste de CORS para HTTPS
builder.Services.AddCors(p =>
    p.AddDefaultPolicy(b =>
        b.WithOrigins(
            "http://localhost:5173",   // ? frontend Vite (HTTP)
            "https://localhost:5173"   // ? HTTPS en Vite
        )
        .AllowAnyHeader()
        .AllowAnyMethod()
));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
