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
  const recognizedPets = ['cat']
  const requestedPet: string = typeof ctx.query.pet === 'string' ? ctx.query.pet : ''

  //TODO: Currently, there's logic in both app.ts and the petfactory to deal with unrecognized pets. 
  //  Have to decide if I really want to throw a 400 when I could just show another cat?  Answer seems obvious...
  if(recognizedPets.includes(requestedPet)) {
    ctx.response.type = 'image/jpeg';
    ctx.body = await getPet(requestedPet);
  } else {
    ctx.throw(400, 'Bad Request: Pet not found')
  }
});

// errors

app.on('error', (err, ctx) => {
  console.error('Server Error: ', err, ctx)
})

module.exports = app.listen(3000);