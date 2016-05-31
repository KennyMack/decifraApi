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


/*

// Create a Course Type
module.exports.createCourseType = (courseType) => {
    return new Promise( (resolve, reject) => {
        new musicsModel.musics({
            'description': courseType['description']
        }).save()
            .then(resolve, reject);
    });
};

// Update a Course Type
module.exports.updateCourseType =  (courseType) => {
    return new Promise( (resolve, reject) => {
        let query = {_id: courseType['_id']};
        let data = {
            'description': courseType['description']
        };

        musicsModel.musics.findOneAndUpdate(query, data, { upsert: false, new: true })
            .exec()
            .then(resolve, reject);
    });
};

module.exports.validateCourseType =  (courseType, status) => {
    return new Promise( (resolve, reject) => {
        let objRet = {};

        if (status !== utils.OPERATION_STATUS.DELETE &&
            status !== utils.OPERATION_STATUS.SELECT) {
            courseType['description'] = validator.trim(validator.escape(courseType['description'].toString() || ''));

            if (validator.isNull(courseType['description']))
                objRet['description'] = 'Descrição é de preenchimento obrigatório.';

        }

        if (status === utils.OPERATION_STATUS.UPDATE ||
            status === utils.OPERATION_STATUS.SELECT ||
            status === utils.OPERATION_STATUS.DELETE) {
            courseType['_id'] = validator.trim(validator.escape(courseType['_id'].toString() || ''));

            let idNull = validator.isNull(courseType['_id']);

            if (idNull)
                objRet['_id'] = 'Id do Tipo do curso é de preenchimento obrigatório.';

            if (!idNull && (!validator.isMongoId(courseType['_id'])))
                objRet['_id'] = 'Id do Tipo do curso informado é inválido.';
        }

        if (Object.keys(objRet).length !== 0) {
            reject(objRet);
        }
        else {
            resolve(courseType);
        }
    });
};*/