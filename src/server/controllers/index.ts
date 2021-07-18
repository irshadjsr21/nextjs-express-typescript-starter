import { RequestHandler } from 'express';

export const getStatus: RequestHandler = (req, res) => {
	res.json({ message: 'Running' });
};
