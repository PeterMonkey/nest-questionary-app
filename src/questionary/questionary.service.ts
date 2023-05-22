import { Injectable } from '@nestjs/common';
import { Questionary } from './questionary.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionaryDTO } from './dto/createQuestionary.dto';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(Questionary)
    private readonly questionaryRepository: Repository<Questionary>,
  ) {}

  async create(quest: CreateQuestionaryDTO): Promise<Questionary> {
    const questionary = this.questionaryRepository.create({
      title: quest.title,
    });
    await this.questionaryRepository.save(questionary);
    return questionary;
  }
}
