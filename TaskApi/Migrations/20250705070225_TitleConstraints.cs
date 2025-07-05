using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskApi.Migrations
{
    /// <inheritdoc />
    public partial class TitleConstraints : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "TaskItems",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_TaskItems_Title",
                table: "TaskItems",
                column: "Title",
                unique: true);

            migrationBuilder.AddCheckConstraint(
                name: "CK_TaskItems_Title_NotEmpty",
                table: "TaskItems",
                sql: "LEN(LTRIM(RTRIM([Title]))) > 0");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_TaskItems_Title",
                table: "TaskItems");

            migrationBuilder.DropCheckConstraint(
                name: "CK_TaskItems_Title_NotEmpty",
                table: "TaskItems");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "TaskItems",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
