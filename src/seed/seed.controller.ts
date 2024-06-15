import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@ApiBearerAuth()
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeeds() {
    return this.seedService.runSeeds();
  }
}
