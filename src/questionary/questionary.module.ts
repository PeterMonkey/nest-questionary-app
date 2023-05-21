import { Module } from '@nestjs/common';
import { QuestionaryController } from './questionary.controller';
import { QuestionaryService } from './questionary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questionary } from './questionary.entity';
import { Question } from './question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questionary, Question])],
  controllers: [QuestionaryController],
  providers: [QuestionaryService],
})
export class QuestionaryModule {}
