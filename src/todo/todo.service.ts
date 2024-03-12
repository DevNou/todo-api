import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from 'src/DTO/create-todo.dto';
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

    async createTodo(createTodoDTO:CreateTodoDto ) {
        const todo = new TodoEntity();
        const {title,description} = createTodoDTO;
        todo.title = title;
        todo.description = description;
        todo.status = ToDoStatus.OPEN;
        // todo.date = createTodoDTO.createdDate;

        //save thus newCreate
        this.repo.create(todo);
        return await this.repo.save(todo);
    }
}
