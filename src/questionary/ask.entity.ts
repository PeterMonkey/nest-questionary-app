import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ask {
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
}
