import Koa from 'koa';
import mount from 'koa-mount';
import cors from 'koa2-cors';

import api from './api';
import config from './config';
import errorHandler from './middlewares/error_handler';

const app = new Koa();
app.use(cors());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    await errorHandler(error, ctx);
  }
});
app.use(mount('/', api));

app.listen(config.app.port);

export default app;