import { movies, series } from './file.js'

const getAllMovies = (req, res) => {
  res.send(JSON.parse(movies))
}

const insertNewMovies = (req, res) => {
    
}

const getAllSeries = (req, res) => {
  res.send(JSON.parse(series))
}

export { getAllMovies, getAllSeries, insertNewMovies }
