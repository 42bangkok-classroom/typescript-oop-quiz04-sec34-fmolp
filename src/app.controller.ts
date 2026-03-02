// **เงื่อนไข:**

// - ใน `MissionService` ให้จำลอง Array ของภารกิจ (Mock Data) ดังนี้:
//   ```typescript
//   private readonly missions = [
//     { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
//     { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
//     { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
//     { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
//     { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
//     { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
//   ];
//   ```
// - Method `getSummary()` จะต้องไม่คืนค่า Array ออกไปตรงๆ แต่ให้ทำการรวบรวม (Aggregate) จำนวนสถานะแต่ละแบบจาก mock data ข้างต้น
// - ส่งผลลัพธ์กลับไปเป็น object ที่มี key เป็นชื่อสถานะ และ value เป็นจำนวนนับ
import { Controller, Get } from '@nestjs/common';
import { MissionService } from './app.service';

@Controller()
export class MissionController {
  constructor(private readonly appService: MissionService) {}

  @Get()
  getSummary(): string {
    return this.appService.getSummary();
  }
}
