// types/request.ts

import { Request } from "express";

interface AuthRequest<T> extends Request {
  user?: any;
  admin?: any;
  body: T;
}

export default AuthRequest;
