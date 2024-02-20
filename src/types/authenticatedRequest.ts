import { Request } from "express";

interface AuthenticatedRequest extends Request {
  user: {
    _id: string; // Replace with the actual type of _id
    // Other properties of the user object
  };
}


export default AuthenticatedRequest