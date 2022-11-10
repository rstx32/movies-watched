import fs from 'fs'

const movies = fs.readFileSync('db/movies.json', 'utf-8')
const series = fs.readFileSync('db/series.json', 'utf-8')

export { movies, series }
