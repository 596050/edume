import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { keypadCombinations } from "./constants";
import { searchWords } from "./keypadCombinations";

const router = Router();

router.post(`/keypad-combination`, (req: Request, res: Response) => {
  try {
    const input = req?.body?.input;
    const response = searchWords(input);

    return res.status(StatusCodes.OK).json(response).end();
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: keypadCombinations,
    });
  }
});

export default router;
