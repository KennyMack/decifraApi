/**
 * Created by jonathan on 30/05/16.
 */
'use strict';
const express = require('express');
const router = express.Router();
const musicsController = require('../controllers/musics-controller');

/* GET home page. */
router.get('/', (req, res, next) => {
    musicsController.list()
        .then((musics)=>{

        	if (musics.length > 0) {
	            res.json({
	                success: true,
	                data: musics
	            });
	        }
	        else {
	        	res.json({
	                success: false,
	                data: musics
	            });	
	        }
        })
        .catch((err)  => {
            res.json({
                success: false,
                data: err
            });
        });
});

router.get('/artist/:nameArtist', (req, res, next) => {
    let nameArtist = req.params.nameArtist || '';

    musicsController.listByArtist(nameArtist)
        .then((musics)=>{

        	if (musics.length > 0) {
	            res.json({
	                success: true,
	                data: musics
	            });
            }
	        else {
	        	res.json({
	                success: false,
	                data: musics
	            });	
	        }
        })
        .catch((err)  => {
            res.json({
                success: false,
                data: err
            });
        });

});

router.get('/music/:nameMusic', (req, res, next) => {
    let nameMusic = req.params.nameMusic || '';

    musicsController.listByMusic(nameMusic)
        .then((musics)=>{

        	if (musics.length > 0) {
	            res.json({
	                success: true,
	                data: musics
	            });
            }
	        else {
	        	res.json({
	                success: false,
	                data: musics
	            });	
	        }
        })
        .catch((err)  => {
            res.json({
                success: false,
                data: err
            });
        });
});

router.get('/artist/:nameArtist/music/:nameMusic', (req, res, next) => {
    let nameArtist = req.params.nameArtist || '';
    let nameMusic = req.params.nameMusic || '';

    musicsController.listByMusicAndArtist(nameArtist, nameMusic)
        .then((musics)=>{
            if (musics.length > 0) {
	            res.json({
	                success: true,
	                data: musics
	            });
            }
	        else {
	        	res.json({
	                success: false,
	                data: musics
	            });	
	        }
        })
        .catch((err)  => {
            res.json({
                success: false,
                data: err
            });
        });
});

router.get('/all/artist/:nameArtist/music/:nameMusic', (req, res, next) => {
    let nameArtist = req.params.nameArtist || '';
    let nameMusic = req.params.nameMusic || '';

    musicsController.listByMusicOrArtist(nameArtist, nameMusic)
        .then((musics)=>{
            if (musics.length > 0) {
                res.json({
                    success: true,
                    data: musics
                });
            }
            else {
                res.json({
                    success: false,
                    data: musics
                }); 
            }
        })
        .catch((err)  => {
            res.json({
                success: false,
                data: err
            });
        });
});

module.exports = router;