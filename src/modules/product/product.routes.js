import { Router } from "express"
import * as PC from "./product.controller.js";

const router=Router();

router.post("/addproduct",PC.addproduct)
router.get("/getallproducts",PC.getallproducts)
router.get("/getallproducts_owners",PC.getallproducts_owners)

export default router;