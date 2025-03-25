import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ Request: req });
    next();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ Response: res });
  }
}
