import { Questionary } from 'src/questionary/questionary.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Questionary, (q) => q.users, { eager: true })
  questionary_created: Questionary[];

  @ManyToMany(() => Questionary, (q) => q.users, { eager: true })
  @JoinColumn()
  questionary_finished: Questionary[];
}
