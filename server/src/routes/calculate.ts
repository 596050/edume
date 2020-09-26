import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { calculate } from "./constants";

const router = Router();

router.post(`/keypad-combinations`, (req: Request, res: Response) => {
  console.log("req", req.body);

  //   const { user } = req.body;
  //   if (!user) {
  //     return res.status(BAD_REQUEST).json({
  //       error: paramMissingError,
  //     });
  //   }
  //   // Add new user
  //   user.role = {};
  //   await userDao.add(user);

  return res.status(StatusCodes.OK).end();
});

export default router;
