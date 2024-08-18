import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { randomBytes } from 'crypto';
import { CreateRequest } from './interfaces/create-request.interface';
import { ListResponse } from './interfaces/list-response.interface';
import { Todo } from './interfaces/todo-interface';

@Controller()
export class TodoService {
  private todoItems: Array<Todo> = [
    {
      id: '1',
      title: 'First todo',
      description: 'This is the first todo',
    },
  ];
  @GrpcMethod('TodoService', 'Create')
  create(data: CreateRequest): string {
    const id = randomBytes(16).toString('hex');
    this.todoItems.push({ ...data, id });
    return id;
  }

  @GrpcMethod('TodoService', 'List')
  list(data: any): ListResponse {
    return { todos: this.todoItems };
  }
}
