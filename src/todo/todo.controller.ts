import { Body, Controller, Get, Post, Patch, Param, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from 'src/DTO/create-todo.dto';


// http://localhotst:3000/todos
@Controller('todos') //decorator που οριζει εναν controller 

export class TodoController {

    constructor(private todoService: TodoService) { }


    //http GET verb
    @Get()
    getAllTodos() {
        return this.todoService.getAllTodos();
    }

    @Post()
    createNewTodo(@Body(ValidationPipe) data:CreateTodoDto) {
        const { title, description } = data;

        return this.todoService.createTodo(data);
    }

}
