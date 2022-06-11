const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params', req.params);
    const galleryId = req.params.id;
  
  const sqlText = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1;
  `
  const sqlParams = [
    galleryId
  ]

    pool.query(sqlText, sqlParams)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log('Purchased failed', err)
      res.sendStatus(500)
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const sqlText = `
    SELECT * FROM gallery
    ORDER BY id ASC;
      `;

    pool
        .query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`Err in DB query`, err);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;