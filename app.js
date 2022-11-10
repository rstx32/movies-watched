import express from 'express'
import { getAllMovies, getAllSeries, insertNewMovies } from './app/route.js'

const app = express()
app.use(express.json())

app.get('/movies', getAllMovies)
app.post('/movies', insertNewMovies)
app.get('/series', getAllSeries)

app.listen(process.env.APP_PORT, () => {
  console.log(`app running on port ${process.env.APP_PORT}`)
})
