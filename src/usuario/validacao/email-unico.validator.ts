import { ValidationArguments, ValidatorConstraintInterface } from "class-validator"
import { UsuariosArmazenados } from "../usuario.dm";
import { Injectable } from "@nestjs/common";
Injectable()
export class emailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private Usuarios : UsuariosArmazenados){

    }
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}
