const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');


// DO NOT MODIFY THIS FILE FOR BASE MODE


// GET Route
router.get('/', (req, res) => {
    console.log('in get router');
    const sqlText = `SELECT * FROM "gallery"`;

    pool.query(sqlText)
        .then((result) => {
            console.log('results', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('get failed', error);
            res.sendStatus(500);
        })
}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in put router', req.params);

    let sqlText = `
        UPDATE "gallery"
        SET "likes" = likes++
        WHERE "id" = $1
    `;

    let sqlParams = [
        req.params.id
    ];

    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log('put success', result.rows);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('put failure', error);
            res.sendStatus(500);
        })
}); // END PUT Route

module.exports = router;

