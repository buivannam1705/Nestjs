import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './models/product.model';
import { Account } from './models/users.model';
import { ProductModule } from './modules/products/product.module';
import { UsersModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Abc@123',
      database: 'quanlysv',
      entities: [Account,
      ],
      synchronize: true,
    }),
    ProductModule,
    UsersModule,

  ],
  controllers: [AppController,],
  providers: [AppService],

})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
