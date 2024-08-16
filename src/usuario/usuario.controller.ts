import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuario.dm";
import { RetornoUsuarioDTO } from "./dto/retornoUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private Usuarios : UsuariosArmazenados){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){        
        var emailValido =this.Usuarios.validaEmail( dadosUsuario.email);
        var novoUsuario = new UsuarioEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, 
                                            dadosUsuario.cidade, dadosUsuario.email,
                                            dadosUsuario.telefone, dadosUsuario.senha
        )
        
        if (emailValido){
            this.Usuarios.AdicionarUsuario(novoUsuario);
            var retorno = new RetornoUsuarioDTO('Usuario criado',novoUsuario);
            
           
        }else{  
            var retorno = new RetornoUsuarioDTO('Usuario não criado - email duplicado',null);            
        }

        return retorno
        
        
    }

    @Get()
    async retornaUsuario(){
        return {
                Usuarios: this.Usuarios.Usuarios
            };
    }
}