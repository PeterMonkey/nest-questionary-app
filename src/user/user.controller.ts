import { Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUser: CreateUserDTO): Promise<User> {
    return this.userService.create(createUser);
  }
}
