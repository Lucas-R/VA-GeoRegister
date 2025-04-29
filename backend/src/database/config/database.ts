import { join } from "path";
import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const conn = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: true,
    synchronize: false,
    entities: [join(__dirname , "../entity/**/*.{ts,js}")],
    migrations: [join(__dirname,  "../migration/**/*.{ts,js}")]
})