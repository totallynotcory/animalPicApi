import * as request from 'supertest'
import * as app from '../src/app'

describe('app', () => {
  it('/pet/cat gets a cat (200)', async () => {
    await request(app)
      .get('/pet/cat')
      .expect(200)
  })

  it("/pet/fordpinto is still cool (200)", async () => {
    await request(app)
      .get('/pet/fordpinto')
      .expect(200)
  })
})
