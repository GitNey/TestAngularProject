/**
 * Creates the `WebApplicationBuilder` instance to build the web application
 * with its configuration (services, middlewares and other components).
 */
var builder = WebApplication.CreateBuilder(args); // Create the container

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build(); // Build the container

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

