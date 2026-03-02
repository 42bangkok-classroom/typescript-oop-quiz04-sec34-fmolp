import { Module } from '@nestjs/common';
import { MissionService } from './app.service';
import { MissionController} from './app.controller';

@Module({
  imports: [MissionService],
  controllers: [MissionController],
  providers: [],
})
export class AppModule {}