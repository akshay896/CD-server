const jsonServer = require('json-server')

const CDserver = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')
 const PORT = 3000 || process.env.PORT

 CDserver.use(middleware)
 CDserver.use(route)
 CDserver.listen(PORT,()=>{
  console.log(`Crude App server started at port ${PORT} and waiting for client request`);
 })