function mostrarTipoDeMuebles() {
    const muebles = obtenerDatosTipoMuebleLS();
    let contenido = "";

    for (const mueble of muebles) {
        contenido += `<div class="col-md-3 text-center">
        <a href="mueble.html" onclick="verTipoDeMuebleElegido(${mueble.id});" class="text-decoration-none">
        <img src="${mueble.imagen}" alt="${mueble.nombre}" height="244" />
        <p>${mueble.nombre}</p>
        </a>
        </div>`;
    }

    document.getElementById("muebles").innerHTML = contenido;
}

mostrarTipoDeMuebles();
mostrarTotalBTNCarrito();