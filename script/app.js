const iconos = document.querySelectorAll('.proyectos-recientes .proyecto a');
iconos.forEach(elemento => elemento.addEventListener('click', e => {
    e.preventDefault();
    alert('Como el porfolio es mi primer proyecto, cuando haga más proyectos los voy agregando al portfolio');
}));

const botonProyectos = document.querySelector('.proyectos-recientes button');
botonProyectos.addEventListener('click', e => {
    e.preventDefault();
    alert('Como el porfolio es mi primer proyecto, cuando haga más proyectos los voy agregando al portfolio');
});