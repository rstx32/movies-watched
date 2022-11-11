import express from 'express'
import {
  getAllMovies,
  getAllSeries,
  insertNewMovies,
  insertNewSeries,
} from './app/route.js'

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/movies', getAllMovies)
app.post('/movies', insertNewMovies)
app.get('/series', getAllSeries)
app.post('/series', insertNewSeries)

app.listen(process.env.APP_PORT, () => {
  console.log(`app running on port ${process.env.APP_PORT}`)
})
