import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoStatus, TodoEntity } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

//decorator injectible
@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity) private repo: Repository<TodoEntity>) { }
    async getAllTodos() 
    {
        return await this.repo.find();
    }

    async createTodo(title: string, description: string) {
        const todo = new TodoEntity();
        todo.title = title;
        todo.description = description;
        todo.status = ToDoStatus.OPEN;

        //save thus newCreate
        this.repo.create(todo);
        return await this.repo.save(todo);
    }
}
