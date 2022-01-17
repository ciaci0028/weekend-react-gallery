const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');


// DO NOT MODIFY THIS FILE FOR BASE MODE


// GET Route
router.get('/', (req, res) => {
    console.log('in get router');
    const sqlText = `SELECT * FROM "gallery" ORDER BY "id"`;

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

// Post route
router.post('/', (req, res) => {
    console.log('in post router', req.body);

    const sqlText = `
        INSERT INTO "gallery"
            ("path", "description", "likes")
        VALUES
            ($1, $2, $3)
    `;

    const sqlParams = [
        req.body.path,
        req.body.description,
        0
    ];

    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log('post success');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('post failure', error);
            res.sendStatus(500);
        });

}); // End post router

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in put router', req.params);

    let sqlText = `
        UPDATE "gallery"
        SET "likes" = likes + 1
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

// Delete router
router.delete('/:id', (req, res) => {
    console.log('in delete router', req.params.id);

    let sqlText = `
    DELETE FROM "gallery"
    WHERE "id" = $1
    `;

    let sqlParams = [
        req.params.id
    ];

    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log('delete success');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('delete failure', error);
            res.sendStatus(500);
        });
}); // End delete router

module.exports = router;

