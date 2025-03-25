import { IsString } from 'class-validator';

import { z } from 'zod';

export class CreateUserPocDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  fullname: string;
}

export const createUserPocSchema = z
  .object({
    fullname: z.string(),
  })
  .required();

export type CreateUserPocDto2 = z.infer<typeof createUserPocSchema>;
