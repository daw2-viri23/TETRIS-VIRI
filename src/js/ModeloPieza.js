import { model } from "./model.js";

export class ModeloPieza {
    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = [model[this.modelo].matriz[0].thisangulo]

        

        console.log(this.matriz)
    }
}