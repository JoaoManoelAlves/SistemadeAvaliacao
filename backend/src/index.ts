import dotenv from 'dotenv'
dotenv.config()
import Fastify from 'fastify'
import {FastifyRequest, FastifyReply} from 'fastify'
import { UserLogin } from './types/loginType.js'
const app = Fastify()

app.get('/', async (request, reply) => {
  reply.send("hello world")
})

app.post('/login', (request: FastifyRequest, reply: FastifyReply) => {

})
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server is running at ${address}`)
})