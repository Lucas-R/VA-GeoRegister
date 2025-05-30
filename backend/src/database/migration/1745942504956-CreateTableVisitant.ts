import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVisitant1745942504956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "visitant",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "by",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "jsonb",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
        await queryRunner.dropTable("visitant");
    }
}
