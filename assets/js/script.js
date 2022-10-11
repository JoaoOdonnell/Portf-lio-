function mouseEvent(isover, elementId, overtext) {
  if (isover) {
    document.getElementById(elementId).innerHTML = `>${overtext}`;
  } else {
    document.getElementById(elementId).innerHTML = "";
  }
}

function mostrarProjetos() {
  document.getElementById("linkGitHub").innerHTML = "https://github.com/JoaoOdonnell";
}

const triangulo = document.querySelector(".triangulo-para-baixo");
const linkGit = document.querySelector("#linkGitHub");

triangulo.addEventListener("click", () => {
  linkGit.classList.toggle("hidden");
});
