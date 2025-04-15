import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class FindUserByIdService {
    constructor(private readonly repository: UserRepository) {}
    
    public async execute(id: number): Promise<User> {
        const user = await this.repository.findById(id);
        if(!user){
            throw new Error();
        }
        return user;
    }
}