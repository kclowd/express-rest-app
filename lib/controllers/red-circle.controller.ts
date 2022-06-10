
import { Request, Response } from 'express';
import { insufficientParameters, successResponse, failureResponse } from '../modules/common/service';
import e = require('express');

export class RedCircleController {

    public test_get(req: Request, res: Response) {
        // Add get logic here
        successResponse('Get request successful', {}, res);
    }

    public test_post(req: Request, res: Response) {
        // Add post logic here
        successResponse('post request successful', {}, res);
    }
}