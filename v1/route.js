import express from 'express'
import { fetchall,fetchData } from './controller.js';

const routerv1 = express.Router();


routerv1.get('/',fetchall);
routerv1.get('/data',fetchData);


export default routerv1;