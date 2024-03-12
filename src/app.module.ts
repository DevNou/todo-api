import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: "root",
      password: "@σγα459496#",
      database: "nestjs",
      autoLoadEntities: true,
      synchronize: true,

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
