 const muebles =[ //Tipos de muebles que suelen hacer
    {id:1 , nombre:"ARMARIO" , precio:300000},
    {id:2 , nombre:"COCINA", precio:250000},
    {id:3 , nombre:"VESTIDOR", precio:350000},
    {id:4 , nombre:"BANITORI", precio:150000},
    // 0 Posible opcion para en un futuro poner un apartado de texto para que se describa el mueble querido
]
const extras =[ //Posibles opciones para agregar al mueble para mejorar su calidad
    {id:1, nombre:"BORDE DE PVC" , precio:50000},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000},
    {id:5 ,nombre:"PATAS PVC" , precio:30000},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000},
]

/*
function listaTipoDeMueble(){
    let listadoTipoDeMuebles = "";

    muebles.forEach(typ => {
        listadoTipoDeMuebles += typ.id+" - "+ typ.nombre+ " - $"+typ.precio + "\n";
    })
    return listadoTipoDeMuebles;
}
function listaExtras(){
    let listadoDeExtras ="";

    extras.forEach(extr =>{
        listadoDeExtras +=  extr.id+" - "+ extr.nombre+ " - $"+extr.precio + "\n";
    })
    return listadoDeExtras;
} */

let descrp = false; // variable para la futura posible descripcion de un mueble

/*
class Voleta { 
    constructor (){
        this.muebles = [];
        this.extras =[];
        this.iva=1.21;
    }

    elegirMueble(id) {
        let elegido = muebles.find(item => item.id === id);
        if(elegido){
            this.muebles.push(elegido);
            console.log("Eligio el tipo de mueble: "+ elegido.nombre);
        }   
    }
    agregarExtra (id) {
    let extraElegido = extras.find(extr => extr.id === id);
    if(extraElegido){
        this.muebles.push(extraElegido);
        console.log("Sumo el extra "+ extraElegido.nombre + " a su pack");
    }
   }
   mostrarVoleta(){
    let combo = "";
    this.muebles.forEach(typ => {
        combo +=typ.nombre+ " - $"+typ.precio + "\n";
    })
    return combo;
    }
    totalPrecioMueble(){
    let total=0;
    this.muebles.forEach(tot =>{
        total += tot.precio;
    })
    return total;
    }
    totalPagar(){
    let totalFinal =0;
    totalFinal=Math.round(((this.totalPrecioMueble() *2) * this.iva));
    return totalFinal;
   }
}*/


let elegTipoMueble = document.getElementById("elegidotipoMueble");
let opcionesTipos = document.getElementById("opcionesTipos");
for (const prod of muebles) {
    let tipodemueble = document.createElement("div");
    tipodemueble.innerHTML =
    `<div id=produc class="card border-0">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="false" id="elegidotipoMueble">
            <label class="form-check-label" for="flexCheckIndeterminate">${prod.nombre}</label>
            <p class="card-text"><b>$${prod.precio}</b></p>
        </div>
    </div>`;
    opcionesTipos.appendChild(tipodemueble); 
    
}

let opcionesExtras = document.getElementById("opcionesExtras");
for (const extr of extras) {
    let opExtra = document.createElement("div");
    opExtra.innerHTML =
    `<div id=produc class="card border-0">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="false" id="elegidoextra">
            <label class="form-check-label" for="flexCheckIndeterminate">${extr.nombre}</label>
            <p class="card-text"><b>$${extr.precio}</b></p>
        </div>
    </div>`;
    opcionesExtras.appendChild(opExtra); 
    
}

class Producto {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }}

function guardarDatos() {
    let valorNombre = document.getElementById("nombre").value;
    let valoremail = document.getElementById("email").value;

    let nuevoProducto = new Producto(valorNombre, valoremail);

    localStorage.setItem("usuario",(nuevoProducto));

}
document.getElementById("guardarDatos").addEventListener("click", guardarDatos);


