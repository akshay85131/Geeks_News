
import express from 'express'
import bodyParser from 'body-parser'
import newsRoutes from './route'
const App = express()
const PORT = 3000
// import cors from 'cors'
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))

App.use('/api', newsRoutes)

App.listen(PORT, () => {
  console.log(`Magic Happening on ${PORT}`)
})
