import { IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    // @IsDate()
    // @IsOptional()
    // createdDate : Date;
}