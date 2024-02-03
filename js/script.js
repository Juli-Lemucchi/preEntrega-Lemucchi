 const muebles =[ //Tipos de muebles que suelen hacer
    {id:1 , nombre:"ARMARIO" , precio:300000},
    {id:2 , nombre:"COCINA", precio:250000},
    {id:3 , nombre:"VESTIDOR", precio:350000},
    {id:4 , nombre:"BANITORI", precio:150000},
    {id:0 , nombre:"OTRO" , precio:0} //Posible opcion para en un futuro poner un apartado de texto para que se describa el mueble querido
]
const extras =[ //Posibles opciones para agregar al mueble para mejorar su calidad
    {id:1, nombre:"BORDE DE PVC" , precio:50000},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000},
    {id:5 ,nombre:"PATAS PVC" , precio:30000},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000},
]

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
}

let descrp = false; // variable para la futura posible descripcion de un mueble

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
            totalPrecios = elegido.precio;
        }else{
            descrp= true
        }      
    }
    agregarExtra (id) {
    let extraElegido = extras.find(extr => extr.id === id);
    if(extraElegido){
        this.muebles.push(extraElegido);
        console.log("Sumo el extra "+ extraElegido.nombre + " a su pack");
        totalPrecios +=extraElegido.precio
    }else{
       descrp=true
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

}

//Interaccion con el usuario
const vole = new Voleta();
let tipoDeMueble= 0;
let extraporagregar=10;

tipoDeMueble= parseInt(prompt("Seleccione el numero de mueble que desea \n" + listaTipoDeMueble()));
if(tipoDeMueble == 0){
    decrip=true; 
    prompt("Comentenos que tipo de mueble desea y proximamente se lo presupuestaremos")
}else{
    vole.elegirMueble(tipoDeMueble);}

while(extraporagregar != 0 ){
    extraporagregar = parseInt(prompt("Desea agregarle a su mueble alguno de nuestros productos premium? \n\n (Si no quiere agregar mas elementos ponga 0) \n\n"+ listaExtras()));
    vole.agregarExtra(extraporagregar);
    if(extraporagregar==0){
        break;
    }
}
let pack = "Detalle de la compra\n\n"+ vole.mostrarVoleta();
let precioDelPack = "El valor subtotal del mueble seria de $"+ vole.totalPrecioMueble();
let totalfinal ="El total a pagar junto con la mano de Obra y el IVA es: $" + vole.totalPagar();
alert(pack + "\n" + precioDelPack+ "\n" + totalfinal);
    
