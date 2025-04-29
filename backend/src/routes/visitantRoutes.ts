import { Router } from "express";
import VisitantCreateController from "@controllers/visitant/VisitantFindCreate.controller";
import VisitantFindAllController from "@controllers/visitant/VisitantFindAll.controller";
import VisitantFindOneController from "@controllers/visitant/VisitantFindOne.controller";
import VisitantUpdateController from "@controllers/visitant/VisitantFindUpdate.controller";
import VisitantDeleteController from "@controllers/visitant/VisitantDelete.controller";

const visitantRoutes = Router();

visitantRoutes.post("/", async(req, res) => {
    return await new VisitantCreateController().handle(req, res);
});

visitantRoutes.get("/", async(req, res) => {
    return await new VisitantFindAllController().handle(req, res);
});

visitantRoutes.get("/:id", async(req, res) => {
    return await new VisitantFindOneController().handle(req, res);
});

visitantRoutes.put("/:id", async(req, res) => {
    return await new VisitantUpdateController().handle(req, res);
});

visitantRoutes.delete("/:id", async(req, res) => {
    return await new VisitantDeleteController().handle(req, res);
});

export default visitantRoutes;