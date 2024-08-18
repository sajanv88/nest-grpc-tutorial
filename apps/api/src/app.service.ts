import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { TodoService } from '../../todo-service/src/todo-service.controller';
import { TODO_PACKAGE } from '../../todo-service/src/constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private todoService: TodoService;

  constructor(
    @Inject(TODO_PACKAGE) private readonly todoGrpcClient: ClientGrpc,
  ) {}
  onModuleInit() {
    this.todoService =
      this.todoGrpcClient.getService<TodoService>('TodoService');
  }

  async listTodos() {
    return this.todoService.list({});
  }
}
