function mostrarPagina(id) {
  let paginas = document.querySelectorAll(".pagina");

  paginas.forEach(function(pagina) {
    pagina.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}