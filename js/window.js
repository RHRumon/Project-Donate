let button = document.getElementById("navigateButton");

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  // If on index.html or root path
  button.textContent = "Blog";

  button.addEventListener("click", function () {
    // Use absolute path for navigation
    window.location.href = "/blog.html";  // Change to the absolute path
    sessionStorage.setItem("secondPageVisited", true);
  });
} else if (window.location.pathname === "/blog.html") {
  // If on blog.html
  if (sessionStorage.getItem("secondPageVisited")) {
    button.textContent = "Home";
  }

  button.addEventListener("click", function () {
    // Use absolute path for navigation
    window.location.href = "/index.html";  // Change to the absolute path
    sessionStorage.removeItem("secondPageVisited");
  });
}
