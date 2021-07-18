import path from 'path';
import express from 'express';
import next from 'next';
import dotenv from 'dotenv-flow';

import logger from './server/utils/logger';
import apiRouter from './server';

dotenv.config();

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({
	dev,
	dir: path.join(__dirname, 'client'),
	customServer: true
});
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.use('/api', apiRouter);

		server.get('*', (req, res) => handle(req, res));

		server.listen(PORT, () => {
			logger.info(`Ready on http://localhost:${PORT}`);
		});
	})
	.catch(ex => {
		logger.error(ex.stack);
		process.exit(1);
	});
