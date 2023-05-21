import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Questionary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  questions: string[];
}
