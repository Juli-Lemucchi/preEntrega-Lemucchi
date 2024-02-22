const muebles =[ //Tipos de muebles que suelen hacer
    {id:1 , nombre:"ARMARIO" , precio:300000, imagen:"../img/armario_blanco.jpg"},
    {id:2 , nombre:"COCINA", precio:250000, imagen:"../img/cocina_blancaplus.jpg"},
    {id:3 , nombre:"VESTIDOR", precio:350000, imagen:"../img/vestidor_beige.jpg"},
    {id:4 , nombre:"BANITORI", precio:150000, imagen:"../img/banitori_flotante.jpg"}, 
]
const extras =[ //Opciones para agregar al mueble para mejorar su calidad
    {id:1, nombre:"BORDE DE PVC" , precio:50000, imagen:"../img/ej_vis_borde.jpg"},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000, imagen:"../img/ej_vis_bisagra.jpg"},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000, imagen:"../img/ej_vis_corredera.jpg"},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000, imagen:"../img/ej_vis_ladoCajones.jpg"},
    {id:5 ,nombre:"PATAS PVC" , precio:30000, imagen:"../img/ej_vis_patapvc.jpg"},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000, imagen:"../img/ej_vis_kitArmario.jpg"},
]

//Datos tipo de mueble
const guardarTiposMueblesLS = (muebles) => {
    localStorage.setItem("muebles", JSON.stringify(muebles));
}
const obtenerDatosTiposMueblesLS = () => {
    return JSON.parse(localStorage.getItem("muebles")) || [];
}
//Guardar id del mueble elegido
const idMuebleLS = () => {
    return JSON.parse(localStorage.getItem("mueble")) || 0;
}
//Ver por id el mueble elegido
const verTipoDeMuebleElegido = (id) => {
    localStorage.setItem("mueble", JSON.stringify(id));
}
//Guardo el dato completo de que tipo se eligio 
const obtenerTipoMuebleLS = () => {
    const muebles = obtenerDatosTiposMueblesLS();
    const id = idMuebleLS();
    const mueble = muebles.find(item => item.id === id);
    return mueble;
}
guardarTiposMueblesLS(muebles);
//-------------------------------------------------------------------------------------------------------------------------------
//Datos extras 
const guardarExtrasLS = (extras) => {
    localStorage.setItem("extras", JSON.stringify(extras));
}
const obtenerDatosExtrasLS = () => {
    return JSON.parse(localStorage.getItem("extras")) || [];
}
//Datos del carrito 
const guardarCarritoLS = (extras) => {
    localStorage.setItem("carrito", JSON.stringify(extras));
}
const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
//Guardo id del extra
const idExtrasLS = () => {
    return JSON.parse(localStorage.getItem("extra")) || 0;
}
//Cantidad de extras agregados
const cantTotaldeExtrasAgregados = () => {
    const carrito = obtenerCarritoLS();
    return carrito.length;
} 
//Suma de precios
const sumaTotalProductos = () => {
    const carrito = obtenerCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}
//Eliminar extras del carrito
const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    mostrarTotalBTNCarrito();
    notificacion("Carrito Eliminado!");
}
//Lo veo por id
const verExtraElegido = (id) => {
    localStorage.setItem("extra", JSON.stringify(id));
}

const buscarExtra = () => {
    const extras = obtenerDatosExtrasLS();
    const id = idExtrasLS();
    const extra = extras.find(item => item.id === id);

    return extra;
}
//Agregar productos a la compra
const agregarTipoYExtrasCarrito = () => {
    const mueble = obtenerTipoMuebleLS();
    const producto = buscarExtra();
    const carrito = obtenerCarritoLS();
    carrito.push(mueble);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    mostrarTotalBTNCarrito();
    notificacion("Producto Agregado!");
}
//Eliminar productos de la compra
const eliminarTipoYExtrasoCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    mostrarTotalBTNCarrito();
    notificacion("Producto Eliminado!");
}
//Mostrar en el boton la cantidad de productos
const mostrarTotalBTNCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotaldeExtrasAgregados();
}
