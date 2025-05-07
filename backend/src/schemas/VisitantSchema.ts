import { z } from "zod";

const VisitantAddress = z.object({
    addressLine: z.string().min(3, { message: 'O endereço é muito curto.' }).optional(),
    district: z.string().min(2, { message: 'O bairro é muito curto.' }),
    city: z.string().min(2, { message: 'A cidade é muito curta.' }).optional(),
    region: z.string().optional(),
    zipcode: z.string().optional(),
    country: z.string().min(2, { message: 'O país deve ter pelo menos 2 caracteres.' }).optional(),
    complement: z.record(z.string()).optional()
});

const Visitant = z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    by: z.string(),
    address: VisitantAddress,
    created_at: z.date().optional(),
    updated_at: z.date().optional()
});

export type VisitantAddressSchema = z.infer<typeof VisitantAddress>;
export type VisitantSchema = z.infer<typeof Visitant>;