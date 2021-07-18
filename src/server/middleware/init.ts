/**
 * This will return all the essential middleware to
 * initialize the server.
 */

import express from 'express';

const initMiddleware = [
	express.json(),
	express.urlencoded({ extended: false })
];

export default initMiddleware;
