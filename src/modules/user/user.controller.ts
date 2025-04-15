import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { CreateUserService } from "./services/user-create.service";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { User } from "./interfaces/user.interface";
import { FindAllUsersService } from "./services/user-find-all.service";
import { FindUserByIdService } from "./services/user-find-by-id.service";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UpdateUserByIdService } from "./services/user-update-by-id.service";
import { DeleteUserByIdService } from "./services/user-delete-by-id.service";

@Controller('/user')
export class UserController {
    constructor(
        private readonly createService: CreateUserService,
        private readonly findAllService: FindAllUsersService,
        private readonly findByIdService: FindUserByIdService,
        private readonly updateByIdService: UpdateUserByIdService,
        private readonly deleteByIdService: DeleteUserByIdService,
    ){}

    @Post()
    public async create(
        @Body() payload: CreateUserDTO,
    ): Promise<User>{
        return this.createService.execute(payload);
    }

    @Get()
    public async findAll(): Promise<User[]>{
        return this.findAllService.execute();
    }

    @Get(':id')
    public async findById(@Param('id') id: number): Promise<User>{
        return this.findByIdService.execute(id);
    }

    @Put(':id')
    public async updateById(
        @Param('id') id: number,
        @Body() payload: UpdateUserDTO,
    ): Promise<void>{
        return this.updateByIdService.execute(id, payload);
    }

    @Delete(':id')
    public async deleteById(@Param('id') id: number): Promise<void>{
        return this.deleteByIdService.execute(id);
    }
}