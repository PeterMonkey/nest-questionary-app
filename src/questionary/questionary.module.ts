import { Module } from '@nestjs/common';
import { QuestionaryController } from './questionary.controller';
import { QuestionaryService } from './questionary.service';

@Module({
  controllers: [QuestionaryController],
  providers: [QuestionaryService],
})
export class QuestionaryModule {}
