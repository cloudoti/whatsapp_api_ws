import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { User } from "../entity/user.entity";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("login")
  login(@Body() user: User): Promise<User> {
    return this.authService.login(user);
  }
}
