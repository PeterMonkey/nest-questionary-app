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
    try {
      const questionary = this.questionaryRepository.create({
        title: quest.title,
      });
      await this.questionaryRepository.save(questionary);
      return questionary;
    } catch (error) {
      throw new Error('Bad request');
    }
  }

  async getQuestionary(): Promise<Questionary[]> {
    try {
      const quest = this.questionaryRepository.find();
      return quest;
    } catch (error) {
      throw new Error('Bad request');
    }
  }
}
