const muebles =[ //Tipos de muebles que suelen hacer
{id:1 , nombre:"ARMARIO" , precio:300000, imagen:"../img/armario_blanco.jpg"},
{id:2 , nombre:"COCINA", precio:250000, imagen:"../img/cocina_blancaplus.jpg"},
{id:3 , nombre:"VESTIDOR", precio:350000, imagen:"../img/vestidor_beige.jpg"},
{id:4 , nombre:"BANITORI", precio:150000, imagen:"../img/banitori_flotante.jpg"},
// 0 Posible opcion de mueble que no esta entre las posibilidades 
]
const extras =[ //Opciones para agregar al mueble para mejorar su calidad
    {id:1, nombre:"BORDE DE PVC" , precio:50000, imagen:"../img/ej_vis_borde.jpg"},
    {id:2 ,nombre: "BISAGRA CON CIERRE SUAVE" , precio:60000, imagen:"../img/ej_vis_bisagra.jpg"},
    {id:3 ,nombre:"CORREDERA TELESCOPICA REFORZADA" , precio:45000, imagen:"../img/ej_vis_corredera.jpg"},
    {id:4 ,nombre:"LATERALES METALICOS" , precio:30000, imagen:"../img/ej_vis_ladoCajones.jpg"},
    {id:5 ,nombre:"PATAS PVC" , precio:30000, imagen:"../img/ej_vis_patapvc.jpg"},
    {id:6 ,nombre:"KIT PLACARD" , precio:75000, imagen:"../img/ej_vis_kitArmario.jpg"},
]

const guardarTiposMueblesLS = (muebles) => {
    localStorage.setItem("muebles", JSON.stringify(muebles));
}

const obtenerDatosTiposMueblesLS = () => {
    return JSON.parse(localStorage.getItem("muebles")) || [];
}
const guardarExtrasLS = (extras) => {
    localStorage.setItem("extras", JSON.stringify(extras));
}
const obtenerDatosExtrasLS = () => {
    return JSON.parse(localStorage.getItem("extras")) || [];
}

const idMuebleLS = () => {
    return JSON.parse(localStorage.getItem("mueble")) || 0;
}
const idExtrasLS = () => {
    return JSON.parse(localStorage.getItem("extra")) || 0;
}

const verTipoDeMuebleElegido = (id) => {
    localStorage.setItem("mueble", JSON.stringify(id));
}
const verExtraElegido = (id) => {
    localStorage.setItem("extra", JSON.stringify(id));
}

guardarTiposMueblesLS(muebles);
const obtenerTipoMuebleLS = () => {
    const muebles = obtenerDatosTiposMueblesLS();
    const id = idMuebleLS();
    const mueble = muebles.find(item => item.id === id);
    return mueble;
}
guardarTiposMueblesLS(muebles);

const obtenerExtraLS = () => {
    const extras = obtenerDatosExtrasLS();
    const id = idExtrasLS();
    const extra = extras.find(item => item.id === id);
    return extra;
}
guardarExtrasLS(extras);


