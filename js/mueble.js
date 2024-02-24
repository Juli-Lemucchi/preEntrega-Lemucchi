function mostrarMuebleElegido() {
    const mueble = obtenerTipoMuebleLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center">
    <h2>${mueble.nombre}</h2>
    <img src="${mueble.imagen}" alt="${mueble.nombre}" class="imgMuebleElegido" />
    <h3>$${mueble.precio}</h3>
    <p><button class="btn colorbtn" onclick="agregarTipoCarrito()">(+) Agregar</button></p>
    </div>`;

    document.getElementById("mueble").innerHTML = contenido;
}

mostrarMuebleElegido();

function mostrarExtras() {
    const extras = obtenerDatosExtrasLS();
    let contenido = "";
    for (const extra of extras) {
        contenido += `<div class="col-md-4 text-center">
        <div class="text-center">
        <img src="${extra.imagen}" alt="${extra.nombre}" height="200" />
        </div>
        <div class="text-center">
        <h3>${extra.nombre}</h3>
        <p>$${extra.precio}</p> 
        <p><button class="btn colorbtn" onclick="agregarExtrasCarrito()">(+) Agregar</button></p>
        </div> </div>
        `;}
    document.getElementById("extras").innerHTML = contenido;
}
mostrarExtras();
mostrarTotalBTNCarrito();

