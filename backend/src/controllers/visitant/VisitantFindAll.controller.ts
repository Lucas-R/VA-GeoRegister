import { Request, Response } from "express";
import VisitantFindAllService from "@services/visitant/VisitantFindAll.service";

class VisitantFindAllController {
    async handle(req: Request, res: Response) {
        const page  = Number(req.query.page)  || 1;
        const take  = Number(req.query.limit) || 100;

        try {
            const data = await new VisitantFindAllService().execute(page, take);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantFindAllController;