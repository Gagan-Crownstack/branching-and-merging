import express from 'express'
import { getall } from './controller.js';

const routerv2 = express.Router();


routerv2.get('/',getall);

export default routerv2;