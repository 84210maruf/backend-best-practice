import { Hono } from "hono";
import bookRouter from "./routes/books";
import { stream } from "hono/streaming";
import { logger } from 'hono/logger'
import Top from "./page";

const app = new Hono();

app.get('/', (c) => c.json('Hono start!'))
app.route('/book', bookRouter)
// app.route('/jsx', (c) =>{
//     const message = ['g','rg','er']
//     return c.html(<Top message={message}/>)
// })

app.use('*',logger());




Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3030,
})