import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { keypadCombinations } from "./constants";
import { searchWords } from "./keypadCombinations";

const router = Router();

router.post(`/keypad-combinations`, (req: Request, res: Response) => {
  const input = req?.body?.input;
  if (!Array.isArray(input) || !input.length) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: keypadCombinations,
    });
  }
  const response = searchWords(input);
  return res.status(StatusCodes.OK).json({ words: response }).end();
});

export default router;
