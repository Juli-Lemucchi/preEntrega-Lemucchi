function renderCarrito() {
    const mueble = obtenerTipoMuebleLS();
    const extras = obtenerDatosExtrasLS();
    let contenido = "";

    if (cantTotalAgregados() > 0) {
        contenido =  `<table class="tabla">
        <thead>
          <tr>
            <td><button class="btn colorbtn btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito <img src="./img/trash.svg" alt="Eliminar"></button></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-start"><img src="${mueble.imagen}" alt="${mueble.nombre}" width="64" /></td>
            <td>${mueble.nombre}</td>
            <td><b>$${mueble.precio}</b></td>
            <td><button class="btn colorbtn btn-sm" onclick="eliminarTipoCarrito(${mueble.id})" title="Eliminar Producto"><img src="./img/trash.svg" alt="Eliminar"></button></td>
          </tr>`;
          for (const extra of extras) {
            contenido += `
          <tr>
            <td><img src="${extra.imagen}" alt="${extra.nombre}" width="64" /></td>
            <td>${extra.nombre}</td>
            <td><b>$${extra.precio}</b></td>
            <td><button class="btn colorbtn btn-sm" onclick="eliminarExtrasCarrito()" title="Eliminar Producto"><img src="./img/trash.svg" alt="Eliminar"></button></td>
          </tr>`;
        }
        contenido +=`</tbody>
        </table>`;
          
    } else {
        contenido = `<h4 class="my-5 p-5 text-center">No se encontraron productos agregados a su combra</h4>`;
    }
    document.getElementById("voleta").innerHTML = contenido;
}

renderCarrito();
mostrarTotalBTNCarrito();