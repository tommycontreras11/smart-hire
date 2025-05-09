import { Request, Response } from "express";
import { createCountryService } from "./../../services/country/create.service";
import { statusCode } from "./../../utils/status.util";

export const createCountryController = async (req: Request, res: Response) => {
  createCountryService(req.body)
    .then((data) => res.status(statusCode.CREATED).json({ message: data }))
    .catch((e) =>
      res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ error: { message: e.message } })
    );
};
