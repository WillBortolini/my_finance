import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IBasicLogin } from "../interfaces/baisc-login.interface";
import { UserRepository } from "src/modules/user/repositories/user.repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BasicLoginService {

    constructor(private readonly userRepository: UserRepository){}
    
    public async execute(payload: IBasicLogin): Promise<boolean> {
        const user = await this.userRepository.findByEmail(payload.email);
        if(!user || await !this.checkPassword(payload.password, user.password)){
            throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }

    private async checkPassword(password: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(password, hash);
    }
}