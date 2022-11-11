import fs from 'fs'

// get movies or series from json file
const moviesList = fs.readFileSync('db/movies.json', 'utf-8')
const seriesList = fs.readFileSync('db/series.json', 'utf-8')

// insert new movie
const insertMovies = (movie) => {
  const moviesTemp = JSON.parse(moviesList)

  const isMovieExist = moviesTemp.find(
    (m) => m.name === movie.name && m.year === movie.year
  )

  if (isMovieExist == undefined) {
    moviesTemp.push(movie)
    fs.writeFileSync('db/movies.json', JSON.stringify(moviesTemp))

    return true
  } else {
    return false
  }
}

// insert new series
const insertSeries = (series) => {
  const seriesTemp = JSON.parse(seriesList)

  const isSeriesExist = seriesTemp.find(
    (s) =>
      s.name === series.name &&
      s.season === series.season &&
      s.finished === series.finished
  )

  if (isSeriesExist == undefined) {
    seriesTemp.push(series)
    fs.writeFileSync('db/series.json', JSON.stringify(seriesTemp))

    return true
  } else {
    return false
  }
}

export { moviesList, seriesList, insertMovies, insertSeries }
