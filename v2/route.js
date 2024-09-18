import express from 'express'
import { getall,getdata,getUpdates,featuresA,featureB } from './controller.js';

const routerv2 = express.Router();


routerv2.get('/',getall);
routerv2.get('/data',getdata);
routerv2.get('/update',getUpdates);


export default routerv2;