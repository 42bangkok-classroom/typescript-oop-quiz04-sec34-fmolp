import { Get, Injectable} from '@nestjs/common';

@Injectable()
export class MissionService {
  getSummary(): string {
    return 'Hello World!';
  }
}

@findAll()
export class MissionController {
  constructor(private readonly appService: MissionService) {}

  @Get()
  getSummary(): string {
    return this.appService.getSummary();
  }
}