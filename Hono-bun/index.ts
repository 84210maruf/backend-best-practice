import { Hono } from "hono";


const app = new Hono();


app.get('/', (c) => c.json('hallow! simple server'))

Bun.serve({
    fetch : app.fetch,
    port : process.env.PORT || 3000
})


console.log("Hello via Bun (simple server)!");