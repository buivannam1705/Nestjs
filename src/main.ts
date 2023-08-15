declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
