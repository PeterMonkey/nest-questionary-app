import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Question } from './question.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Questionary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Question, (question) => question.questionary, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  questions: Question[];

  @ManyToMany(() => User, (user) => user.questionary_finished, { eager: false })
  @JoinColumn()
  users: User[];

  @ManyToOne(() => User, (user) => user.questionary_created, { eager: false })
  owner: User;
}
