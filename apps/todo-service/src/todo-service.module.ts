import { Module } from '@nestjs/common';
import { TodoService } from './todo-service.controller';

@Module({
  imports: [],
  controllers: [TodoService],
  providers: [TodoService],
})
export class TodoServiceModule {}
