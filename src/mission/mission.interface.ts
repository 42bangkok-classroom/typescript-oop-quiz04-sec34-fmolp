import { NestFactory } from '@nestjs/core';
import { MissionModule} from './mission.module';
export interface IMission {
	id: string;
	codename: string;
	status: string;
	targetName: string;
	riskLevel: string;
	startDate: string;
	endDate: string | null;
	durationDays?: number;
}
