import express from 'express'
import { configDotenv } from 'dotenv'

import giftsRouter from './routes/gifts.js'

const app = express()

// Serve static files from the client public directory
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

// Add the gifts endpoint
app.use('/gifts', giftsRouter)

// Define a route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Start server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
