import { VisitantRepository } from "@database/repository/VisitantRepository";
import { VisitantSchema } from "@schemas/VisitantSchema";

class VisitantCreateService {
    async execute(payload: VisitantSchema) {
        const create = VisitantRepository.create(payload);
        const data = await VisitantRepository.save(create);
        return data;
    }
}

export default VisitantCreateService;