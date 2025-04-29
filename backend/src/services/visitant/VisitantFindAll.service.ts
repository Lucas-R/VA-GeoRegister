import { VisitantRepository } from "@database/repository/VisitantRepository";

class VisitantFindAllService {
    async execute() {
        const [data, total] = await VisitantRepository.findAndCount();
        return { data, total };
    }
}

export default VisitantFindAllService;