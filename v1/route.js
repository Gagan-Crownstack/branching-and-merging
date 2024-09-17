import express from 'express'
import { fetchall } from './controller.js';

const routerv1 = express.Router();


routerv1.get('/',fetchall);

export default routerv1;