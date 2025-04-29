import { conn } from "@database/config/database";
import { Visitant } from "@database/entity/Visitant";
import { VisitantSchema } from "@schemas/VisitantSchema";

export const VisitantRepository = conn.getRepository<VisitantSchema>(Visitant);