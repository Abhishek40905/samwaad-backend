import { Router } from "express";
import {submitentrydata} from '../controllers/entries.controller.js'
const router= Router();


router.route('/submitentrydata').post(submitentrydata)


export default router