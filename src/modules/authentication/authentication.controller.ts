import { Body, Controller, Post } from "@nestjs/common";
import { BasicLoginService } from "./services/basic-login.service";
import { BasicLoginDTO } from "./dtos/basic-login.dto";

@Controller('/authentication')
export class AuthenticationController {
    constructor(private readonly basicLoginService: BasicLoginService){}

    @Post('/basic')
    public basicLogin(
        @Body() payload: BasicLoginDTO,
    ){
        return this.basicLoginService.execute(payload);
    }
}