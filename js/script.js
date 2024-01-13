let nombreUsuario= prompt("ingrese su nombre");
let cursoUsuario= prompt("Que curso esta cursando?");
let totalRestpuestas=0
cursoUsuario= cursoUsuario.toUpperCase()


    if(cursoUsuario == "JAVASCRIPT")  {
        let empiezaEljuego= confirm("Quieres jugar un juego? "+nombreUsuario);
        while (empiezaEljuego == true){
            let nPregunta=prompt("Elija un numero entre el 1 y el 4 inclusive");
            switch(nPregunta){
            case "1":
                let respuesta1= prompt("Cual es el tipo de dato de la siguiente expresion. \n let numero = '123' ");
                    respuesta1=respuesta1.toLocaleUpperCase()
                    if(respuesta1 == "STRING"){
                        totalRestpuestas += 1
                        alert("Very good sumas 1 punto. Vas:" + totalRestpuestas)
                    }
                    else{
                        totalRestpuestas -=1
                        alert(" Mu mal \n La respuesta correcta era String \n Restas 1 punto Vas:" + totalRestpuestas)
                    }
                break;
            case "2":
                let respuesta2= prompt("Que signo se usa para declarar el valor de una variable?")
                    if(respuesta2 == "="){
                        totalRestpuestas +=1
                        alert("very good sumas 1 punto. Vas:" + totalRestpuestas)
                    }
                    else{
                        totalRestpuestas -=1
                        alert(" Mu mal \n La respuesta correcta era = \n Restas 1 punto Vas:" + totalRestpuestas)
                    }
                break;
            case "3":
                let respuesta3= prompt("Cuantos resultados me va a dar el siguiente ciclo \n for(i=0;i = 4;i++)")
                respuesta3=respuesta3.toLocaleUpperCase()
                    if(respuesta3 == "5"){
                        totalRestpuestas +=1
                       alert("Very good sumas 1 punto. Vas:" + totalRestpuestas)
                    }
                    else{
                        totalRestpuestas -=1
                        alert(" Mu mal \n La respuesta correcta era 5 \n Restas 1 punto Vas:" + totalRestpuestas)
                    }
                break;
            case "4":
                let respuesta4 = prompt("En la siguiente suma, cuanto va a arrojas la consola? \n suma= 1 + '2' ")
                respuesta4=respuesta4.toLocaleUpperCase()
                    if(respuesta4 == "12"){
                        totalRestpuestas +=1
                        alert("very good sumas 1 punto. Vas: " + totalRestpuestas)
                    }
                    else{
                        totalRestpuestas -=1
                        alert(" Mu mal \n La respuesta correcta era 12 \n Restas 1 punto Vas:" + totalRestpuestas)
                        
                    }
                break;
            default:
                 alert("Su numero seleccionado no es una pregunta")
                 alert("Su total de puntos final fue de:"+ totalRestpuestas)
                 empiezaEljuego= confirm("Quieres seguir jugando?")
                break;
            }
        }
        if(empiezaEljuego == false){
            alert("No quiere jugar un juego :'(")
        }

        
    }
    else{
        alert("DATO ERRONEO. AGUANTE JAVASCRIPT")
    }
