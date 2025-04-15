import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";
import * as bcrypt from 'bcrypt';
import { CreateUser } from "../types/user.type";

@Injectable()
export class CreateUserService {
    constructor(private readonly repository: UserRepository) {}
    
    public async execute(user: CreateUser): Promise<User> {
        user.password = await this.encryptPassword(user.password)
        return await this.repository.create(user);
    }

    private async encryptPassword(password: string): Promise<string>{
        return bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS || 10));
    }
}