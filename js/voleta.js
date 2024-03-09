function renderCarrito() {
  const extras = obtenerCarritoExtras();
  const sub = sumaTotal();
  let contenido = "";


  if (cantTotalAgregados() > 0) {
    contenido =  `<table class="tabla">
    <thead>
      <tr>
        <td><button class="btn colorbtn btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito <img src="./img/trash.svg" alt="Eliminar"></button></td>
      </tr>
    </thead>
    <tbody>
      `;
      for (const extra of extras) {
        contenido += `
      <tr>
        <td><img src="${extra.imagen}" alt="${extra.nombre}" width="64" /></td>
        <td>${extra.nombre}</td>
        <td><b>$${extra.precio}</b></td>
        <td><button class="btn colorbtn btn-sm" onclick="eliminarExtrasCarrito(${extra.id})"><img src="./img/trash.svg" alt="Eliminar"></button></td>
      </tr>`;
    }
    contenido +=`
    <tr>
    <td> </td>
    <td>Total a Pagar</td>
    <td><b>`+sub+`<b></td>
    <td><button class="btn colorbtn btn-sm" onclick="finalizarCompra()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
    </tr>
    </tbody>
    </table>`;
      
} else {
    contenido = `<h4 class="my-5 p-5 text-center">No se encontraron productos agregados a su combra</h4>`;
}     
  document.getElementById("voleta").innerHTML = contenido;
}

renderCarrito();
mostrarTotalBTNCarrito();