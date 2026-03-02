import { IMission } from './mission.interface';
import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' },
  ];

  getSummary() {
    return this.missions.reduce(
      (acc, mission) => {
        acc[mission.status] = (acc[mission.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }

  findAll(): IMission[] {
    const filePath = path.join(__dirname, '../../data/missions.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const missions: IMission[] = JSON.parse(raw);
    return missions.map((m) => {
      let durationDays = -1;
      if (m.endDate) {
        const start = new Date(m.startDate);
        const end = new Date(m.endDate);
        durationDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      }
      return { ...m, durationDays };
    });
  }
}
