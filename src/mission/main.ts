import { NestFactory } from '@nestjs/core';
import { MissionModule} from './mission.module';

async function bootstrap() {
  const app = await NestFactory.create(MissionModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
