import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuariosArmazenados } from './usuario.dm';

@Module({  
  controllers: [UsuarioController],  
  providers: [UsuariosArmazenados],
})
export class UsuarioModule {}
