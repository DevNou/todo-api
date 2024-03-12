import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';


// http://localhotst:3000/todos
@Controller('todos') //decorator που οριζει εναν controller 

export class TodoController {

    constructor(private todoService:TodoService){}


    //http GET verb
    @Get()
    getAllTodos() {
   
        return this.todoService.getAllTodos();
    }
}
