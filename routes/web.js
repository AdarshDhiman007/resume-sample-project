import express from "express";
import homeController from "../conrollers/homeController.js";
import serviceController from "../conrollers/serviceController.js";
import skillController from "../conrollers/skillController.js";
import contactController from "../conrollers/contactController.js";

const router = express.Router()

router.get('/',homeController)
router.get('/services',serviceController)
router.get('/skills',skillController)
router.get('/contact',contactController)

export default router