import { Status } from '@prisma/client';

export class UserEntity {
  id: string;
  email: string;
  name?: string;
  description?: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}