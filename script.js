const getCurrentYear = () => {
  return new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = getCurrentYear();
});
