import { IsNotEmpty } from 'class-validator';

export class CreateQuestionaryDTO {
  @IsNotEmpty()
  title: string;
}
