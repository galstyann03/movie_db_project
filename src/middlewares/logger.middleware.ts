import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { method, url, body} = req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} request to ${url}`);
    console.log('Request Body:', body);

    next();
};

export default loggerMiddleware;