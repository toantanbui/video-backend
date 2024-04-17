const mongoose = require('mongoose');
//import mongoose from "mongoose"
const connect = require('../connectDBMongo/connectDBMongo');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    // id: ObjectId,
    movieName: {
        type: String,
        index: true
    },
    parameterName: {
        type: String,
        index: true
    },
    lastName: String,
    duration: String,
    releaseYear: String,
    director: String,
    action: String,
    category: String,
    country: String,
    movieContent: String,
    movieLink: String,
    time: Date,


    image: Buffer,





}, { collection: 'object' },
    {
        timestamps: true,
        // autoIndex: false
    }
)

const ListVideo = mongoose.model('ListVideo', schema1);


schema1.index({ movieName: "text" });
//schema1.createIndex({ movieName: 'text' });
//schema1.createIndexes()
//ListVideo.index({ movieName: 'text' });


const schema2 = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    token: String


},
    { timestamps: true }
)

const Users = mongoose.model('Users', schema2);



module.exports = { ListVideo, Users, schema1 }