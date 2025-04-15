import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class FindAllUsersService {
    constructor(private readonly repository: UserRepository) {}
    
    public async execute(): Promise<User[]> {
        return await this.repository.findAll();
    }
}