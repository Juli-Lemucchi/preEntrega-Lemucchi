const muebles =[ //Tipos de muebles que suelen hacer
    {id:1 , nombre:"ARMARIO" , precio:300000, imagen:"./img/armario_blanco.jpg"},
    {id:2 , nombre:"COCINA", precio:250000, imagen:"./img/cocina_blancaplus.jpg"},
    {id:3 , nombre:"VESTIDOR", precio:350000, imagen:"./img/vestidor_beige.jpg"},
    {id:4 , nombre:"BANITORI", precio:150000, imagen:"./img/banitori_flotante.jpg"}, 
]
const extras =[ //Opciones para agregar al mueble para mejorar su calidad
    {id:1, nombre:"BORDE DE PVC" , precio:50000, imagen:"./img/ej_vis_borde.jpg"},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000, imagen:"./img/ej_vis_bisagra.jpg"},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000, imagen:"../img/ej_vis_corredera.jpg"},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000, imagen:"./img/ej_vis_ladoCajones.jpg"},
    {id:5 ,nombre:"PATAS PVC" , precio:30000, imagen:"./img/ej_vis_patapvc.jpg"},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000, imagen:"./img/ej_vis_kitArmario.jpg"},
]
//Datos TipoDeMueble 
const guardarTipoMueblesLS = (muebles) => {
    localStorage.setItem("muebles", JSON.stringify(muebles));
  }
const obtenerDatosTipoMuebleLS = () => {
    return JSON.parse(localStorage.getItem("muebles")) || [];
  }
 
  //Guardar id del Tipo elegido
const idMuebleLS = () => {
    return JSON.parse(localStorage.getItem("mueble")) || 0;
  }
const verMuebleElegido = (id) => {
    localStorage.setItem("mueble", JSON.stringify(id));
  }
  //Guardo el dato completo 
const obtenerTipoMuebleLS = () => {
    const muebles = obtenerDatosTipoMuebleLS();
    const id = idMuebleLS();
    const mueble = muebles.find(item => item.id === id);
    return mueble;
  }
  guardarTipoMueblesLS(muebles);
 //--------------------------Carrito TipoDeMueble------------------------------------------
  const guardarCarritoTipoDeMueble = (mueble) => {
    localStorage.setItem("carritoM", JSON.stringify(mueble));
  }
  const obtenerCarritoTipoDeMueble = () => {
    return JSON.parse(localStorage.getItem("carritoM")) || [];
  }
  //__________Interaccion con el carrito____________
  //Agregar Tipo
  const agregarTipoDeMuebleCarrito = () => {
    const mueble = obtenerTipoMuebleLS();
    const carrito = obtenerCarritoTipoDeMueble();
    carrito.push(mueble);
    guardarCarritoExtras(carrito);
    mostrarTotalBTNCarrito();
    notificacion("Tipo de mueble elegido!"); 
  }
  //Eliminar TipoDeMueble
  const eliminarTipoDeMuebleCarrito = (id) => {
    const carrito = obtenerCarritoTipoDeMueble();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoTipoDeMueble(carritoActualizado);
    renderCarrito();
    mostrarTotalBTNCarrito();
    notificacion("Tipo de mueble eliminado!")
  }

//-------------------------------------------------------------------------------------
//Datos extras 
const guardarExtrassLS = (extras) => {
    localStorage.setItem("extras", JSON.stringify(extras));
}
const obtenerDatosExtrasLS = () => {
    return JSON.parse(localStorage.getItem("extras")) || [];
}
//Guardar id del Extra elegido
const idExtraLS = () => {
    return JSON.parse(localStorage.getItem("extra")) || 0;
}
const verExtraElegido = (id) => {
    localStorage.setItem("extra", JSON.stringify(id));
}
//Guardo el dato completo de que extra se eligio 
const obtenerExtraElegidoLS = () => {
    const extras = obtenerDatosExtrasLS();
    const id = idExtraLS();
    const extra = extras.find(item => item.id === id);
    return extra;
}
guardarExtrassLS(extras);
//--------------------------Carrito extras------------------------------------------
//Datos de carrito
const guardarCarritoExtras = (extra) => {
    localStorage.setItem("carritoE", JSON.stringify(extra));
}
const obtenerCarritoExtras = () => {
    return JSON.parse(localStorage.getItem("carritoE")) || [];
}
//__________Interaccion con el carrito____________
//Agregar extras
const agregarExtrasCarrito = () => {
    const extra = obtenerExtraElegidoLS();
    const carrito = obtenerCarritoExtras();
    carrito.push(extra);
    guardarCarritoExtras(carrito);
    mostrarTotalBTNCarrito();
    notificacion("Extra Agregado!"); 
}
//Eliminar extras
const eliminarExtrasCarrito = (id) => {
    const carrito = obtenerCarritoExtras();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoExtras(carritoActualizado);
    renderCarrito();
    mostrarTotalBTNCarrito();
    notificacion("Extra eliminado!")
}

//_____________________________________________________________________________________________
//Cantidad de extras agregados
const cantTotalAgregados = () => {
    const carrito =obtenerCarritoExtras();
    return carrito.length;
} 
//Suma de precios
const sumaTotal = () => {
    const carrito =obtenerCarritoExtras();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

//Eliminar carrito
const eliminarCarrito = () => {
    localStorage.removeItem("carritoE");
    renderCarrito();
    mostrarTotalBTNCarrito();
}
//Mostrar en el boton la cantidad de productos
const mostrarTotalBTNCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalAgregados();
}


const notificacion = (texto) => {
    Toastify({
        text: texto,
        duration: 3000,
        
        }).showToast();
}

const finalizarCompra = () => {
    Swal.fire({
        title: "Gracias por su compra!",
        text:"El total de su compra es $"+sumaTotal(),
        width: 900,
        padding: "3em",
        color: "#000000",
        background: "url(./img/fondoEncabPie.jpeg)",
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCarrito();
        }
    });
}


