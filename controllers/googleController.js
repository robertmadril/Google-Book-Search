const axios = require("axios");
const db = require("../models");
require('dotenv').config()

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function (req, res) {
    const q = req.query.q;
    console.log(q.toString());

    let query = "https://www.googleapis.com/books/v1/volumes?q=" + q + "&key=" + process.env.GBOOKS;
    console.log(query)
    axios
      .get(query)
      .then(
        (response) => {
          res.json(response.data.items)
        }
      ).catch(
        (err) => {
          res.json({ error: error })
        }
      );
  }};
