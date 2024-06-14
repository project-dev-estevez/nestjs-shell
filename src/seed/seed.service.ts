import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  
  runSeeds() {
    return {
      message: 'Seeds executed successfully!'
    };
  }
}
