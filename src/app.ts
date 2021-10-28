import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import { getPet } from './factories/petfactory'
const app = new Koa()
const router = new Router()

app.use(logger());

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
