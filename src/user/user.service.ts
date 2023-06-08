import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    try {
      const { name, email, password } = user;
      const data = this.userRepository.create({
        name,
        email,
        password,
      });

      await this.userRepository.save(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
