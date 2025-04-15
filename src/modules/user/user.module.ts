import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { CreateUserService } from './services/user-create.service';
import { FindAllUsersService } from './services/user-find-all.service';
import { FindUserByIdService } from './services/user-find-by-id.service';
import { DeleteUserByIdService } from './services/user-delete-by-id.service';
import { UpdateUserByIdService } from './services/user-update-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserRepository, 
    CreateUserService, 
    FindAllUsersService, 
    FindUserByIdService,
    UpdateUserByIdService,
    DeleteUserByIdService,
  ],
})
export class UserModule {}