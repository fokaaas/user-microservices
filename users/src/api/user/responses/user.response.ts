import { Status } from '@prisma/client';


export class UserResponse {
  id: string;
  email: string;
  name: string;
  description: string;
  status: Status;
}