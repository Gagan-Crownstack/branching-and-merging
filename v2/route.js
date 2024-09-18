import express from 'express'
import { getall,getdata,getUpdates } from './controller.js';

const routerv2 = express.Router();


routerv2.get('/',getall);
routerv2.get('/data',getdata);
routerv2.get('/update',getUpdates);
routerv2.get('/feature/a',featuresA);
routerv2.get('/feature/b',featureB);

export default routerv2;