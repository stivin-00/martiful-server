// types/request.ts

import { Request } from "express";
import { UserDocument } from "./user";

interface AuthRequest<T> extends Request {
  user?: any;
  admin?: any;
  body: T;
}

export default AuthRequest;
