import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { UpdateUser } from "../types/user.type";
import { FindUserByIdService } from "./user-find-by-id.service";

@Injectable()
export class UpdateUserByIdService {
    constructor(
        private readonly repository: UserRepository,
        private readonly findByIdService: FindUserByIdService,
    ) {}

    public async execute( id: number, payload: UpdateUser): Promise<void>{
        await this.findByIdService.execute(id);
        await this.repository.updateUserById(id, payload);
    }
}