import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Questionary } from './questionary.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  option1: string;

  @Column()
  option2: string;

  @Column()
  option3: string;

  @Column()
  option4: string;

  @Column()
  answer: string;

  @ManyToOne(() => Questionary, { eager: false })
  questionary: Questionary;
}
