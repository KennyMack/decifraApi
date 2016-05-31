/**
 * Created by jonathan on 30/05/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var musicsController = require('../controllers/musics-controller');

/* GET home page. */
router.get('/', function (req, res, next) {
    musicsController.list().then(function (musics) {
        res.json({
            success: true,
            data: musics
        });
    }).catch(function (err) {
        res.json({
            success: false,
            data: err
        });
    });
});

router.get('/artist/:nameArtist', function (req, res, next) {
    var nameArtist = req.params.nameArtist || '';

    musicsController.listByArtist(nameArtist).then(function (musics) {
        res.json({
            success: true,
            data: musics
        });
    }).catch(function (err) {
        res.json({
            success: false,
            data: err
        });
    });
});

router.get('/music/:nameMusic', function (req, res, next) {
    var nameMusic = req.params.nameMusic || '';

    musicsController.listByMusic(nameMusic).then(function (musics) {
        res.json({
            success: true,
            data: musics
        });
    }).catch(function (err) {
        res.json({
            success: false,
            data: err
        });
    });
});

router.get('/artist/:nameArtist/music/:nameMusic', function (req, res, next) {
    var nameArtist = req.params.nameArtist || '';
    var nameMusic = req.params.nameMusic || '';

    musicsController.listByMusicAndArtist(nameArtist, nameMusic).then(function (musics) {
        res.json({
            success: true,
            data: musics
        });
    }).catch(function (err) {
        res.json({
            success: false,
            data: err
        });
    });
});

module.exports = router;

//# sourceMappingURL=musics-compiled.js.map