// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
});
