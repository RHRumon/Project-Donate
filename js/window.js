let button = document.getElementById("navigateButton");

const basePath = window.location.pathname.startsWith("/Project-Donate") ? "/Project-Donate" : "";

if (window.location.pathname === basePath + "/index.html" || window.location.pathname === basePath + "/") {
  // If on index.html or root path
  button.textContent = "Blog";

  button.addEventListener("click", function () {
    window.location.href = basePath + "/blog.html";
    sessionStorage.setItem("secondPageVisited", true);
  });
} else if (window.location.pathname === basePath + "/blog.html") {
  // If on blog.html
  if (sessionStorage.getItem("secondPageVisited")) {
    button.textContent = "Home";
  }

  button.addEventListener("click", function () {
    window.location.href = basePath + "/index.html";
    sessionStorage.removeItem("secondPageVisited");
  });
}
