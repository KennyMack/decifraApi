/**
 * Created by jonathan on 30/05/16.
 */
'use strict';
const database = require('../database/database');

const musicsSchema = database.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    music: [{
        type: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }]
});

module.exports.musics = database.db.model('musics', musicsSchema);