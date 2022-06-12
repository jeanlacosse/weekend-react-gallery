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


router.post('/', (req, res) => {

    const sqlText = `
    INSERT INTO gallery (path, description) 
    VALUES ($1, $2);
    `
    const sqlParams = [
      req.body.path,
      req.body.description,
    ]
  
    pool.query(sqlText, sqlParams)
      .then(() => {
        res.sendStatus(201);
        
      })
      .catch((err) => {
        console.log('err is', err);
        res.sendStatus(500)
        
      });
  }); // END POST route
  
  router.delete('/delete/:id', (req, res) => {

    const sqlQuery = `
    DELETE FROM "gallery"
    WHERE id = $1;
    `;

    sqlParams = [
        req.params.id
    ]
  
    pool.query(sqlQuery, sqlParams)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(`Delete to gallery failed`, err)
        res.sendStatus(500)
      });
  }); // END DELETE route


module.exports = router;