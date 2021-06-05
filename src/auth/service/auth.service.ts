import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
  }

  async login(user: User): Promise<User> {
    const u = await this.usersRepository.findOne({
      where: { username: user.username, password: user.password }
    });

    if (u != null) {
      return u;
    }

    throw new NotFoundException("El usuario no existe");

  }

}