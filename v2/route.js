import express from 'express'
import { getall,getdata,getUpdates } from './controller.js';

const routerv2 = express.Router();


routerv2.get('/',getall);
routerv2.get('/data',getdata);
routerv2.get('/update',getUpdates);
routerv2.get('/feature/a',featureA);
routerv2.get('/feature/b',featureB);
routerv2.get('/feature/c',()=>{});
routerv2.get('/feature/d',()=>{});
routerv2.get('/feature/e',()=>{});
routerv2.get('/feature/f',()=>{});





export default routerv2;