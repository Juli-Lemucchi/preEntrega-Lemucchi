function mostrarMuebleElegido() {
    const mueble = obtenerTipoMuebleLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center">
    <img src="${mueble.imagen}" alt="${mueble.nombre}" class="imgMuebleElegido" />
    <p>${mueble.nombre}</p>
    <p>$${mueble.precio}</p>
    </div>`;

    document.getElementById("mueble").innerHTML = contenido;
}

mostrarMuebleElegido();

function mostrarExtras() {
    const extras = obtenerDatosExtrasLS();
    let contenido = "";

    for (const extra of extras) {
        contenido += `<div class="col-md-4 text-center">
        <a href="extra.html" onclick="verExtraElegido(${extra.id});" class="text-decoration-none">
        <img src="${extra.imagen}" alt="${extra.nombre}" height="150" />
        <p>${extra.nombre}</p>
        <p>$${extra.precio}</p>
        </a>
        </div>`;
    }

    document.getElementById("extras").innerHTML = contenido;
}

mostrarExtras();