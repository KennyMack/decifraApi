/**
 * Created by jonathan on 30/05/16.
 */
'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {});

router.get('/artist/:idArtist', function (req, res, next) {});

router.get('/artist/:nameArtist/music/:nameMusic', function (req, res, next) {});

module.exports = router;

//# sourceMappingURL=musics-compiled.js.map