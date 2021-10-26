import * as Koa from 'koa'
import * as Router from 'koa-router'
import { getPet } from './factories/petfactory'
const app = new Koa()
const router = new Router()

// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

router.get('/', (ctx) => {
  ctx.body = 'Alive'
})

router.get('/pet/:type', async (ctx, next) => {
  const requestedPet: string = typeof ctx.params.type === 'string' ? ctx.params.type : ''
  ctx.response.type = 'image/jpeg'
  ctx.body = await getPet(requestedPet)
})

app.use(router.routes())

// errors
app.on('error', (err, ctx) => {
  console.error('Server Error: ', err, ctx)
})

module.exports = app.listen(3000)
