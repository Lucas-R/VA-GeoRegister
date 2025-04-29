import { Request, Response } from "express";
import { VisitantSchema } from "@schemas/VisitantSchema";
import VisitantCreateService from "@services/visitant/VisitantCreate.service";

class VisitantCreateController {
    async handle(req: Request, res: Response) {
        const payload = req.body as VisitantSchema;

        try {
            const data = await new VisitantCreateService().execute(payload);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default VisitantCreateController;