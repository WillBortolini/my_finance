import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { FindUserByIdService } from "./user-find-by-id.service";

@Injectable()
export class DeleteUserByIdService {
    constructor(
        private readonly repository: UserRepository,
        private readonly findByIdService: FindUserByIdService,
    ) {}

    public async execute( id: number): Promise<void>{
        await this.findByIdService.execute(id);
        await this.repository.deleteUserById(id);
    }
}