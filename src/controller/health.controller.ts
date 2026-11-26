import type { Request, Response } from "express";

export const getHealth = (
    req: Request,
    res: Response
) => {
    res.status(200).json({
        status: "Success",
        message: "UAT Service is healthy",
        timestamp: new Date().toISOString()
    });
}