import { Controller, Post, Body } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { CreateQuestionaryDTO } from './dto/createQuestionary.dto';
import { Questionary } from './questionary.entity';

@Controller('questionary')
export class QuestionaryController {
  constructor(private questionaryService: QuestionaryService) {}

  @Post()
  createQuestionary(
    @Body() createQuestionary: CreateQuestionaryDTO,
  ): Promise<Questionary> {
    return this.questionaryService.create(createQuestionary);
  }
}
