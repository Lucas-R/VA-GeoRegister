import { VisitantRepository } from "@database/repository/VisitantRepository";

class VisitantFindOneService {
    async execute(id: string) {
        const data = await VisitantRepository.findOneBy({ id });
        return data;
    }
}

export default VisitantFindOneService;