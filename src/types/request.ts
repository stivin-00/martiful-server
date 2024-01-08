// types/request.ts

import { Request } from 'express';
import { UserDocument } from './user';


interface AuthRequest<T> extends Request {
  user?: UserDocument;
  body: T;
}

export default AuthRequest;
