import { model } from "./model.js"
import { ModeloPieza } from "./ModeloPieza.js"

export const panel = {
    matriz: [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,1,0,0,0,0,1],
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
    pintaPanel: () =>{
        var html = ""

        for(let y=0;y<panel.matriz.length;y++){
            html+=`<div>`
            for(let x = 0; x < panel.matriz[y].length; x++){
                html+=`<div>${panel.matriz[y][x]}</div>`
            }
            html+=`</div>`
        }
    },
    crearNuevaPieza: () => {
        const nuevaPieza = new ModeloPieza(0)
        const modelo = Math.floor(Math.random())
        const x = Math.floor(Math.random())

        nuevaPieza.modelo = modelo
        nuevaPieza.x = x
        nuevaPieza.y = 1
        nuevaPieza.angulo = 0

        console.log('nueva pieza' + nuevaPieza)
        return(nuevaPieza)

    },
    

}