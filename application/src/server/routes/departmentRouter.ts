import * as express from 'express';
import { dbDepartment } from '../db/dbDepartment'; 
import { pool } from '../db/protected/dbcon-dev';
import * as dbm from '../models/dbModel';
import * as APIModel from '../models/APIModel';

export const departmentRouter = express();
const dbControl = new dbDepartment(pool);//exclusive to departments router

//get
departmentRouter.get('/', (req, res, next) => {
    res.render('departments.html');
});

//post
departmentRouter.post('/', (req, res, next) => {
    dbControl.getDepartments().then( data => res.json(data));
});

departmentRouter.post('/get', (req, res, next) => {
    const incData:APIModel.IdRequest = {...req.body};
    dbControl.getDepartment(incData.id).then( data => res.json(data));
});

departmentRouter.post('/add', (req, res, next) => {
    const incData:dbm.IDepartment = {...req.body};

    //error checking
    if (typeof(incData.name) !== 'string'){
         res.status(400).json({'error':'invalid data recieved'});
    }

    //do insert
    dbControl.addDepartment(incData)
    .then( (id) =>
    dbControl.getDepartment(id)
    .then( data => res.json(data)));
});

departmentRouter.post('/options',(req,res,next) => {
    dbControl.listDepartmentOptions().then( data => res.json(data));
});