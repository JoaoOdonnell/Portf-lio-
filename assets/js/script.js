function mouseEvent(isover, elementId, overtext) {
  if (isover) {
    document.getElementById(elementId).innerHTML = `>${overtext}`;
  } else {
    document.getElementById(elementId).innerHTML = "";
  }
}

var triangulo = document.querySelectorAll(".triangulo-para-baixo");

triangulo[0].addEventListener("click", () => {
  let linkGitHub = document.getElementById("linkGitHub");
  if (linkGitHub.classList.contains("hide")) {
    linkGitHub.classList.add("show");
    linkGitHub.classList.remove("hide");
  } else {
    linkGitHub.classList.add("hide");
    linkGitHub.classList.remove("show");
  }
});
