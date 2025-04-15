import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { BasicLoginService } from './services/basic-login.service';
import { UserRepository } from '../user/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthenticationController],
  providers: [BasicLoginService, UserRepository],
})
export class AuthenticationModule {}