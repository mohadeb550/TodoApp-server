/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { ErrorRequestHandler } from 'express'
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

// globar error handler 
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => { 
  return res.status(500).json({
    success: false,
    message : err?.message,
  });
}

app.use(globalErrorHandler)


app.all('*', (req, res) => {
  res.status(404).json({
    "success" : false,
    "statuscode" : 404,
    "message" : "Not found"
  })
})

export default app