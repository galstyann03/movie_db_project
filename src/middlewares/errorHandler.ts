import { Request, Response, NextFunction } from 'express';

interface Error {
    status: number;
    message: string;
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    res.json({
        status: err.status || 500,
        message: err.message || 'Internal Server Error'
    });
}