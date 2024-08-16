import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #usuarios: UsuarioEntity[] = [];  

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    validaEmail(emailNovo: string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email == emailNovo
        )
        
        return (possivelUsuario === undefined)
    }

 

    get Usuarios(){        
        return this.#usuarios;
    }
}