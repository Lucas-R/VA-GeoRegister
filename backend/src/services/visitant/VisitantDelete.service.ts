import { VisitantRepository } from "@database/repository/VisitantRepository";

class VisitantDeleteService {
    async execute(id: string) {
        return await VisitantRepository.delete(id);
    }
}

export default VisitantDeleteService;