const botonMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

botonMenu.addEventListener("click", () => {
  const oculto = menu.classList.toggle("hidden");
  botonMenu.setAttribute("aria-expanded", String(!oculto));
});

document.querySelectorAll("#menu a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.classList.add("hidden");
      botonMenu.setAttribute("aria-expanded", "false");
    }
  });
});

const botonesFiltro = document.querySelectorAll("[data-filter]");
const proyectos = document.querySelectorAll("[data-category]");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const filtro = boton.dataset.filter;

    botonesFiltro.forEach((b) => b.classList.toggle("activo", b === boton));

    proyectos.forEach((proyecto) => {
      const visible =
        filtro === "todos" || proyecto.dataset.category === filtro;
      proyecto.classList.toggle("hidden", !visible);
    });
  });
});

const anio = document.querySelector("#anio");
if (anio) anio.textContent = new Date().getFullYear();
