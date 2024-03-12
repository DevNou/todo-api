import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

//decorator injectible
@Injectable()
export class TodoService {

    constructor(@InjectRepository(TodoEntity) private repo: Repository<TodoEntity>) { }


    async getAllTodos() {

        return await this.repo.find();
    }

}
