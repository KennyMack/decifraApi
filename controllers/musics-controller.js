/**
 * Created by jonathan on 30/05/16.
 */
'use strict';

const musicsModel = require('../models/musics-model');
const validator       = require('validator');

// List all Musics
module.exports.list = () => {
    return new Promise( (resolve, reject) => {
        musicsModel.musics.find({})
            .exec()
            .then(resolve, reject);
    });
};


// List Musics By Artist Name
module.exports.listByArtist = (nameArtist) => {
    return new Promise( (resolve, reject) => {
        musicsModel.musics.find({ artist: new RegExp(nameArtist, "i")})
            .exec()
            .then(resolve, reject);

    });
};

// List Musics By Music Name
module.exports.listByMusic = (nameMusic) => {
    return new Promise( (resolve, reject) => {
        musicsModel.musics.find({ name: new RegExp(nameMusic, "i")})
            .exec()
            .then(resolve, reject);

    });
};

// List Musics By Music Name and Artist Name
module.exports.listByMusicAndArtist = (nameArtist, nameMusic) => {
    return new Promise( (resolve, reject) => {
        let query = {
            name: new RegExp(nameMusic, "i"),
            artist: new RegExp(nameArtist, "i")
        };

        musicsModel.musics.find(query)
            .exec()
            .then(resolve, reject);

    });
};

// List Musics By Music Name or Artist Name
module.exports.listByMusicOrArtist = (nameArtist, nameMusic) => {
    return new Promise( (resolve, reject) => {
        let query = {
            name: new RegExp(nameMusic, "i"),
            artist: new RegExp(nameArtist, "i")
        };

        musicsModel.musics.find({
            $or: [
            {
                'name': new RegExp(nameMusic, "i")
            },
            {
                'artist': new RegExp(nameArtist, "i")
            }
            ]
        })
            .exec()
            .then(resolve, reject);

    });
};



// Get Music By Id
module.exports.getById = (id) => {
    return new Promise( (resolve, reject) => {
        musicsModel.musics.findById(id)
            .exec()
            .then(resolve, reject);
    });
};

// Remove Music By Id
module.exports.removeById = (id) => {
    return new Promise( (resolve, reject) => {
        musicsModel.musics.findByIdAndRemove(id)
            .exec()
            .then(resolve, reject);
    });
};
