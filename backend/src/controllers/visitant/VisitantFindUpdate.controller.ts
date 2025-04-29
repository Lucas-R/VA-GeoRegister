import { Request, Response } from "express";
import { VisitantSchema } from "@schemas/VisitantSchema";
import VisitantUpdateService from "@services/visitant/VisitantUpdate.service";

class VisitantUpdateController {
    async handle(req: Request, res: Response) {
        const id = req.params.id as string;
        const payload = req.body as Partial<VisitantSchema>;

        try {
            await new VisitantUpdateService().execute(id, payload);
            res.status(200).json({ data: `Updated id: ${id}` });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantUpdateController;