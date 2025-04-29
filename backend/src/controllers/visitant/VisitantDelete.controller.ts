import { Request, Response } from "express";
import { VisitantSchema } from "@schemas/VisitantSchema";
import VisitantDeleteService from "@services/visitant/VisitantDelete.service";

class VisitantDeleteController {
    async handle(req: Request, res: Response) {
        const id = req.params.id as string;

        try {
            await new VisitantDeleteService().execute(id);
            res.status(200).json({ data: `Deleted id: ${id}` });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantDeleteController;