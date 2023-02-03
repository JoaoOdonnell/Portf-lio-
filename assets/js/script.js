function mostrarMais() {
  var linkGit = document.getElementById("linkGit");
  var btn = document.getElementById("btnMostrar");
  var vazio = document.getElementById("vazio");

  if (vazio.style.display === "none") {
    vazio.style.display = "inline";
    linkGit.style.display = "none";
    btn.innerHTML = "Ver mais";
  } else {
    vazio.style.display = "none";
    linkGit.style.display = "inline";
    btn.innerHTML = "Ver menos";
  }
}

const btnMobile = document.getElementById("btn-mobile");

function toogleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toogleMenu);
