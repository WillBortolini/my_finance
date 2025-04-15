import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserStatus } from "../enums/user-status.enum";
import { CreateUser, UpdateUser } from "../types/user.type";

@Injectable()
export class UserRepository{
    constructor(
        @InjectRepository(UserEntity)
        private readonly repo: Repository<UserEntity>,
    ) {}

    public async create(user: CreateUser): Promise<UserEntity>{
       return this.repo.save(this.repo.create({...user, status: UserStatus.ACTIVE}));
    }

    private async findOneByFilter(filter: Partial<UserEntity>): Promise<UserEntity | null>{
        return this.repo.findOne({ where: filter });
    }

    private async findByFilter(filter: Partial<UserEntity>): Promise<UserEntity[]>{
        return this.repo.find({ where: filter });
    }

    public async findById(id: number): Promise<UserEntity | null>{
        return this.findOneByFilter({id});
    }

    public async findByEmail(email: string): Promise<UserEntity | null>{
        return this.findOneByFilter({email});
    }

    public async findAll(): Promise<UserEntity[]>{
        return this.findByFilter({})
    }

    public async updateUserById(id: number, payload: UpdateUser): Promise<void> {
        await this.repo.update(id, payload);
    }

    public async deleteUserById(id: number): Promise<void>{
        await this.repo.softDelete(id);
    }
}