import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Questionary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Question, (question) => question.questionary, {
    eager: true,
  })
  @JoinColumn()
  questions: Question[];
}
