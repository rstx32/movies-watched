import { moviesList, seriesList, insertMovies, insertSeries } from './file.js'

// get all movies
const getAllMovies = (req, res) => {
  res.send(JSON.parse(moviesList))
}

// insert new movies
const insertNewMovies = (req, res) => {
  const success = insertMovies(req.body)

  if (success) res.send('success add new movie')
  else res.send('movie already added')
}

// get all series
const getAllSeries = (req, res) => {
  res.send(JSON.parse(seriesList))
}

// insert new series
const insertNewSeries = (req, res) => {
  const success = insertSeries(req.body)

  if (success) res.send('success add new series')
  else res.send('series already added')
}

export { getAllMovies, getAllSeries, insertNewMovies, insertNewSeries }
