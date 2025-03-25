import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ LoggerMiddlewareRequest: req });
    next();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ LoggerMiddlewareResponse: res });
  }
}
