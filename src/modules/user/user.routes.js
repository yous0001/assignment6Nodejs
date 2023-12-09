import * as userController from "./user.controller.js"
import { Router } from "express"

const router=Router()


router.get('/getallusers',userController.getallusers)
router.post('/signup',userController.signup)
router.patch('/updateuser/:email',userController.updateuser)
router.patch('/deleteuser/:email',userController.deleteuser)

export default router