import { VisitantAddressSchema, VisitantSchema } from "@schemas/VisitantSchema";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("visitant")
export class Visitant implements VisitantSchema{
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @Column()
    name!: string;

    @Column()
    phone!: string

    @Column({ type: 'jsonb', nullable: true })
    address!: VisitantAddressSchema;
  
    @CreateDateColumn()
    created_at?: Date;
  
    @UpdateDateColumn()
    updated_at?: Date;
}
