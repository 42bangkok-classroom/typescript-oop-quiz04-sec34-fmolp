import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController} from './mission.controller';

@Module({
  imports: [MissionService],
  controllers: [MissionController],
  providers: [],
})
export class AppModule {}