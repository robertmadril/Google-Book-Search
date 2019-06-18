require("dotenv").config();
const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    searchBooks: function(req, res) {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({error: error})
            }
        );
    },

    saveBook: function(req, res) {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    },

    deleteBook: function(req, res) {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    }

}
