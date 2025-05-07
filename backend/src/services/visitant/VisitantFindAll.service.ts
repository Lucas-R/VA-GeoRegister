import { VisitantRepository } from "@database/repository/VisitantRepository";

class VisitantFindAllService {
    async execute(page: number, take: number) {
        const skip  = (page - 1) * take;
        const [result, total] = await VisitantRepository.findAndCount({ skip, take });
        return { 
            result, 
            total, 
            page: !!total ? page : 0,
            prev: page > 1,
            next: page < Math.ceil(total / take)
        };
    }
}

export default VisitantFindAllService;