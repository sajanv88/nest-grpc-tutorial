import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TODO_PACKAGE } from '../../todo-service/src/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TODO_PACKAGE,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3001',
          package: 'todo',
          protoPath: join(__dirname, 'todo.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
