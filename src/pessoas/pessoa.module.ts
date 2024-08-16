import { Module } from '@nestjs/common';
import { UsuarioController } from './pessoa.controller';
import { UsuariosArmazenados } from './pessoa.dm';

@Module({  
  controllers: [UsuarioController],  
  providers: [UsuariosArmazenados],
})
export class PessoaModule {}

