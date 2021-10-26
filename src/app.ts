import * as Koa from 'koa';
import { getPet } from './factories/petfactory'
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});



// response
app.use(async ctx => {
  const requestedPet: string = typeof ctx.query.pet === 'string' ? ctx.query.pet : ''
  ctx.response.type = 'image/jpeg';
  ctx.body = await getPet(requestedPet);
});

// errors

app.on('error', (err, ctx) => {
  console.error('Server Error: ', err, ctx)
})

module.exports = app.listen(3000);