const express = require("express");
const router = express.Router();
const knex = require("../database");
//GET http://localhost:3000/api/concerts/
//endpoind get =[]
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
    /*await knex("concerts").insert({
      title : "abcd",
      band : "xyz",
      venue : "where",
      created_date : new Date(),
      performance_date : new Date(),
      price : 200
    });*/
  } catch (error) {
    throw error;
  }
});
//POST 
router.post("/", async (request, response) => {
  /*console.log("POST http://localhost:3000/api/concerts/");
  const insertedConsert = await knex("concerts").insert({
    title : "abcd",
    band : "xyz",
    venue : "where",
    created_date : new Date(),
    performance_date : new Date(),
    price : 200
  });*/

  try {
    // const insertedConcert = await knex("concerts").insert({
    //   title: "Musical concert",
    //   band: "Music",
    //   venue: "Copenhagen",
    //   performance_date: "2021-06-15",
    //   price: 200,
    // });
    console.log(request.body);
    // const insertedConcert = await knex("concerts").insert({
    //   title: request.body.title,
    //   band: request.body.band,
    //   venue: request.body.venue,
    //   performance_date: request.body.performance_date,
    //   price: request.body.price,
    // });
    const insertedConcert = await knex("concerts").insert(request.body);
    response.json(insertedConcert);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    const concerts = await knex("concerts").where({
      id: parseInt(request.params.id),
    });
    // const concertsWithId = concerts.filter(
    //   (concert) => concert.id === parseInt(request.params.id)
    // );
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    const concerts = await knex("concerts")
      .where({
        id: parseInt(request.params.id),
      })
      .update({ title: "rock" });
    response.json(concerts);
    //   knex('users')
    // .where({ id: 135 })
    // .update({ email: 'hi@example.com' })
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const concerts = await knex("concerts")
      .where({
        id: parseInt(request.params.id),
      })
      .del();
    response.json(concerts);
    // knex('users')
    // .where({ id: 2 })
    // .del()
  } catch (error) {
    throw error;
  }
});

module.exports = router;
