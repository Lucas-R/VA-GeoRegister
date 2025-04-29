import "dotenv/config";
import cors from "cors";
import express from "express";
import { conn } from "@database/config/database";
import visitantRoutes from "@routes/visitantRoutes";

conn.initialize()
.then(() => {
    const PORT = process.env.SERVER_PORT;
    const HOST = process.env.SERVER_HOST as string;
    const app = express();
    
    app.use(cors({ origin: "*" }));
    app.use(express.json());
    app.use("/visitant", visitantRoutes);
    app.listen({
        port: PORT,
        hostname: HOST
    });
})
.catch((err) => console.log(err));
