import { Request, Response } from "express";
import VisitantFindOneService from "@services/visitant/VisitantFindOne.service";

class VisitantFindOneController {
    async handle(req: Request, res: Response) {
        const id = req.params.id as string;
        try {
            const data = await new VisitantFindOneService().execute(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantFindOneController;