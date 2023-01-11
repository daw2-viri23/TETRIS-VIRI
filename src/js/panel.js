import { model } from "./model.js"
import { ModeloPieza } from "./ModeloPieza.js"

//creamos el objeto con arrow functions dentro
export const panel = {
    //la matriz en la que ira el juego del tetris
    matriz: [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    //variable nuevaPieza
    nuevaPieza: "",
    //pintaPanel
    pintaPanel: ()=>{
        //variable html
        var html = ""
        //bucle para interactuar con la matriz del tetris
        for(let y = 1; y < panel.matriz.length-1; y++){
            //concatenamos lo adherido al html
            html += `<div class="p-fila">`
            //bucle en el que interactuaremos la altura de la matriz
            for(let x = 1; x < panel.matriz[y].length-1; x++){
                //creammos una variable con las posiciones de la matriz seleccionada
                const tablaTetris = panel.matriz[y][x];
                //if con el que si hay un uno en la posicion lo pintara dle siguiente color
                if(tablaTetris == 1){
                    html+= `<div class="celda bg-danger"></div>` 
                }
                //if con el que si hay un cero en la posicion lo pintara dle siguiente color
                else{
                    html+= `<div class="celda border bg-dark border-dark"></div>`
                }
                
            }
            //cerramos la etiqueta html
            html += `</div>`
        }
        //seleccionamos el id panel y pintamos la matriz con los datos recibidos
        document.getElementById('panel').innerHTML = html
    },
    crearNuevaPieza: ()=>{
        //constante que sea un random 
        const miModeloPieza1 = Math.random();
        //constante para redondear la anterior constante
        const miModeloPieza = Math.round(miModeloPieza1);
       //creamos una instancia de la clase modelopieza
        panel.nuevaPieza = new  ModeloPieza(miModeloPieza)
        //creamos una variable x que devuelve el entero mayor o igual más próximo a un número dado gracias al ceil
        //seguimos agregando que sera un para que aparezcan las dos piezas
        let x = Math.ceil(Math.random()*((10-panel.nuevaPieza.longitud)));
        //le damos el valor a x
        panel.nuevaPieza.x = x
    },

    //insertarPieza
    insertarPieza: ()=>{
        //x sera la amplitud de la pieza
        //y sera la altura de la pieza
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y
        
        for(let altura1 = 0; altura1< panel.nuevaPieza.altura; altura1++, y++){
            for(let longitud1 = 0; longitud1< panel.nuevaPieza.longitud; longitud1++, x++){
                panel.matriz[y][x]=1
            }
            x = panel.nuevaPieza.x
        }
    },
    //control de teclas
    controlTeclas: ()=>{
        document.addEventListener("keydown", function(event){

            if(event.key == 'ArrowRight'){
                panel.moverDra();
            }
            else if(event.key == 'ArrowLeft'){
                panel.moverIzq()
            }
            else if(event.key == 'ArrowDown'){
                panel.bajar()
            }
            else if(event.key == 'ArrowUp'){
                let resultado = panel.girarMiPieza()
                if(resultado == true){
                    panel.borrarPieza()
                    panel.nuevaPieza.girar()
                    panel.insertarPieza()
                    panel.pintaPanel()
                }

            }
        })
    },
    borrarPieza: ()=>{
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y

        for(let altura1 = 0; altura1< panel.nuevaPieza.altura; altura1++, y++){
            for(let longitud1 = 0; longitud1< panel.nuevaPieza.longitud; longitud1++, x++){
                panel.matriz[y][x]=0
            }
            x = panel.nuevaPieza.x
        }
    },
    moverDra: ()=>{
        panel.borrarPieza()
        if(panel.nuevaPieza.x <=9 && panel.nuevaPieza.x + panel.nuevaPieza.longitud < 11){
            panel.nuevaPieza.x = panel.nuevaPieza.x + 1
        }

        panel.insertarPieza()
        panel.pintaPanel()

    },
    moverIzq: ()=>{
        panel.borrarPieza()
        if(panel.nuevaPieza.x > 1){
            panel.nuevaPieza.x = panel.nuevaPieza.x -1
            
        }

        panel.insertarPieza()
        panel.pintaPanel()

    },
    bajar: ()=>{
        panel.borrarPieza()
        if(panel.nuevaPieza.y<20 && panel.nuevaPieza.y + panel.nuevaPieza.altura <21){
            panel.nuevaPieza.y = panel.nuevaPieza.y + 1

        }

        panel.insertarPieza()
        panel.pintaPanel()

    },
    iniciarMovimiento: ()=>{
       let bajarPieza = setInterval(panel.bajar,750)

    },
    girarMiPieza: ()=>{
        let giroPieza = false

        panel.borrarPieza()
        panel.nuevaPieza.girar()

        if(panel.nuevaPieza.x + panel.nuevaPieza.longitud <=11 && panel.nuevaPieza.y + panel.nuevaPieza.altura <= 21){
            giroPieza = true
        }
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        return giroPieza
    }
    

}