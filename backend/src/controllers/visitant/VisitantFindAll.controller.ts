import { Request, Response } from "express";
import VisitantFindAllService from "@services/visitant/VisitantFindAll.service";

class VisitantFindAllController {
    async handle(req: Request, res: Response) {
        try {
            const data = await new VisitantFindAllService().execute();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantFindAllController;