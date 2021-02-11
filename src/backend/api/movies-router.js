const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

/*router.get("/", async (request, response) => {
  console.log(movies);
  response.send({ data: movies });
});
router.get("/:year",async(request,response)=>{
  console.log(request.params.year);
  const moviesOfYear = movies.filter(movie=>movie.year==request.params.year);
  response.send({data:moviesOfYear});
});
router.get("/",async(request,response)=>{
  console.log(request.query);
  const yearIntervals = movies.filter(movie=>movie.year>=parseInt(request.query.beginYear) && movie.year<=parseInt(request.query.endYear));
  response.send({data:yearIntervals});
})
router.get("/",async(request,response)=>{
  console.log(request.query);
  const yearIntervalsWithRating = movies.filter(movie=>movie.year>=parseInt(request.query.beginYear) && movie.year<=parseInt(request.query.endYear) && movie.rating>=parseInt(request.query.minRating));
  response.send({data:yearIntervalsWithRating});
})*/



router.get("/", async (request, response) => {
  let beginYear = parseInt(request.query.beginYear);
  let endYear = parseInt(request.query.endYear);
  let minRating = parseFloat(request.query.minRating);

  beginYear = beginYear > 0 ? beginYear : 0;
  endYear = endYear < Number.POSITIVE_INFINITY ? endYear : Number.POSITIVE_INFINITY;
  minRating = minRating > 0 ? minRating : 0;

  let validMovies = movies.filter(
      movie => movie.year >= beginYear &&
          movie.year <= endYear &&
          movie.rating >= minRating
  );
  response.send({ data: validMovies });
});

router.get("/:year", async (request, response) => {
  response.send({ data: movies.filter(
      movie => movie.year === parseInt(request.params.year))
  });
});
/*
router.get("/", async (request, response) => {
  console.log(request.query);
  const firstYear = Math.min(...movies.map(movie => movie.year));
  const lastYear = Math.max(...movies.map(movie => movie.year));
  const beginYear = parseInt(request.query.beginYear) > 0 ? request.query.beginYear : firstYear;
  const endYear = parseInt(request.query.endYear) > 0 ? request.query.endYear : lastYear;
  const minRating = parseFloat(request.query.minRating) > 0 ? request.query.minRating : 0;
  const filteredMovies = movies.filter(movie => movie.year >= beginYear && movie.year <= endYear && movie.rating >= minRating);
  response.send({ data: filteredMovies });
});
​
router.get("/:year", async (request, response) => {
  console.log(request.params.year);
  const moviesInThatYear = movies.filter(movie => movie.year === parseInt(request.params.year));
  response.send({ data: moviesInThatYear });
});

*/


module.exports = router;
