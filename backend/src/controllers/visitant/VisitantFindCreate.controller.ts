import { Request, Response } from "express";
import { VisitantSchema } from "@schemas/VisitantSchema";
import VisitantCreateService from "@services/visitant/VisitantCreate.service";
import { VisitantRepository } from "@database/repository/VisitantRepository";
import ConflictError from "@errors/ConflictError";

class VisitantCreateController {
    async handle(req: Request, res: Response) {
        const payload = req.body as VisitantSchema;

        try {
            const verify = await VisitantRepository.findOne({
               where: { phone: payload.phone } 
            });

            if(!!verify) throw new ConflictError("Usuário já cadastrado");

            const data = await new VisitantCreateService().execute(payload);
            res.status(200).json(data);
        } catch (error) {
            if(error instanceof ConflictError) {
                res.status(409).json({ message: "Usuario já existe" });    
            }
            res.status(400).json(error);
        }
    }
}

export default VisitantCreateController;