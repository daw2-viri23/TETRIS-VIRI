import { model } from "./model.js";
export class ModeloPieza {
    constructor(figura){
        this.modelo = figura
        this.angulo = 0
        this.matriz = model[this.modelo].matriz[this.angulo]
        
        this.x = 1
        this.y = 1
        this.longitud = this.matriz[0][0].length || 0
        this.altura = this.matriz[0].length || 0

        

        console.log(figura)
        console.log("longitud: " + this.altura)
        console.log("altura: " + this.altura)
    }

    girar =()=>{
        this.angulo = this.angulo + 1
        if(this.angulo == 4){
            this.angulo = 0
        }
    }
}
