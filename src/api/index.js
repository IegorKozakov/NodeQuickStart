import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import _ from 'koa-route';

const app = new Koa();

app.use(bodyParser());
app.use(_.get('/', async ctx => {
  ctx.body = {
    status: 200,
    message: 'Node Quick Start with koa.js successfully installed'
  };
}));

export default app;