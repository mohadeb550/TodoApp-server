import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

// use json body parser 
app.use(express.json())

// use cors 
app.use(cors( {origin: "*"}));
// app.use(cors( {origin: "https://car-rental-frontend-hazel.vercel.app"}));

// use router
app.use('/api', router)


app.get('/', (req, res) => {
  res.send('Hello dev!')
})


app.all('*', (req, res) => {
  res.status(404).json({
    "success" : false,
    "statuscode" : 404,
    "message" : "Not found"
  })
})

export default app