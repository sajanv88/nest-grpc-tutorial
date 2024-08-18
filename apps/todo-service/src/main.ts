import { NestFactory } from '@nestjs/core';
import { TodoServiceModule } from './todo-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:3001',
        package: 'todo',
        protoPath: join(__dirname, 'todo.proto'),
      },
    },
  );
  await app.listen();
}

bootstrap();
