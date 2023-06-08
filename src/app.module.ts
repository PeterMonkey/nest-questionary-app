import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionaryModule } from './questionary/questionary.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    QuestionaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
