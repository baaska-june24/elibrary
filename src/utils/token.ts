import * as jwt from "jsonwebtoken";

const SECRET_KEY = "mnD0Ox0i4bPiEf8ZREIVRCwDutFdwGhj54Wdl8Mng";
export const generateCustomToken = async (body: any) => {
  return jwt.sign(body, SECRET_KEY, {
    expiresIn: 86400
  });
};

export const verifyToken = async (token: any) => {
  return jwt.verify(token, SECRET_KEY);
};
