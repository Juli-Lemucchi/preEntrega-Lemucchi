 const muebles =[
    {id:1 , nombre:"ARMARIO" , precio:300000},
    {id:2 , nombre:"COCINA", precio:250000},
    {id:3 , nombre:"VESTIDOR", precio:350000},
    {id:4 , nombre:"BANITORI", precio:150000},
    {id:0 , nombre:"OTRO" , precio:0}
]
const extras =[
    {id:1, nombre:"BORDE DE PVC" , precio:50000},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000},
    {id:5 ,nombre:"PATAS PVC" , precio:30000},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000},
]

function listaTipoDeMueble(){
    let listadoTipoDeMuebles = " ";

    muebles.forEach(typ => {
        listadoTipoDeMuebles += typ.id+" - "+ typ.nombre+ " - $"+typ.precio + "\n";
    })
    return listadoTipoDeMuebles;
}
function listaExtras(){
    let listadoDeExtras =" ";

    extras.forEach(extr =>{
        listadoDeExtras +=  extr.id+" - "+ extr.nombre+ " - $"+extr.precio + "\n";
    })
    return listadoDeExtras;
}

let descrp = false;
let totalPrecios=0;
let manoDeObra=0;

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

   mostrarVoleta() {
    this.muebles.forEach(tipo =>{
        console.log(" ~ "+tipo.nombre + " - $"+ tipo.precio);
    })
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
/*
const vole1 = new Voleta();
console.log("Primer tipo de voleta")
vole1.elegirMueble(1);
vole1.agregarExtra(6);
vole1.agregarExtra(5);
console.log("Pack completo elegido")
vole1.mostrarVoleta();
let precioDelPack = vole1.totalPrecioMueble();
let totalfinal = vole1.totalPagar();
console.log("El valor final del mueble seria de $"+ precioDelPack);
console.log("El total a pagar junto con la mano de Obra y el IVA es $"+ totalfinal);*/


const vole2 = new Voleta();
let tipoDeMueble= " ";
let extraporagregar= " ";
do {
    tipoDeMueble= parseInt(prompt("Seleccione el numero de mueble que desea \n" + listaTipoDeMueble()));
} while (tipoDeMueble != 0){
    vole2.elegirMueble(tipoDeMueble);

};
    
