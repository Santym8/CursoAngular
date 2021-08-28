export class Empleado {

    static idActual : number = 1;

    id:number;
    nombre: string;
    apellido: string;
    cargo: string;
    salario: number;

    constructor(nombre: string, apelliod: string, cargo: string, salario: number) {
        this.id=Empleado.idActual;
        Empleado.idActual++;
        this.nombre = nombre;
        this.apellido = apelliod;
        this.cargo = cargo;
        this.salario = salario;
    }


}