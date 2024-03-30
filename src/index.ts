import { Hono } from 'hono'
import { generateRandomName } from "./generator";

const app = new Hono()

app.get('/', (c) => {
  return c.text(generateRandomName())
})

export default app
