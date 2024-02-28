function mostrarExtraElegido() {
    const extra = obtenerExtraElegidoLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center">
    <h2>${extra.nombre}</h2>
    <img src="${extra.imagen}" alt="${extra.nombre}" class="imgMuebleElegido" />
    <h3>$${extra.precio}</h3>
    <p><button class="btn colorbtn" onclick="agregarExtrasCarrito()"">(+) Agregar</button></p>
    </div>`;

    document.getElementById("extra").innerHTML = contenido;
}

mostrarExtraElegido();
