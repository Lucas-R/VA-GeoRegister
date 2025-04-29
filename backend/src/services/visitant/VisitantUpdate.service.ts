import { VisitantRepository } from "@database/repository/VisitantRepository";
import { VisitantSchema } from "@schemas/VisitantSchema";

class VisitantUpdateService {
    async execute(id: string, payload: Partial<VisitantSchema>) {
        return await VisitantRepository.update(id, payload);
    }
}

export default VisitantUpdateService;