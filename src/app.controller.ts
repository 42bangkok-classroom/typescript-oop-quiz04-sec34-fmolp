  import { Controller, Get } from '@nestjs/common';
import { MissionService } from './app.service';

@Controller()
export class MissionController {
  constructor(private readonly appService: MissionService) {}

  @Get()
  getSummary(): string {
    reduce
    return this.appService.getSummary();
  }
}
