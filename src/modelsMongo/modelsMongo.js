const mongoose = require('mongoose');
//import mongoose from "mongoose"
const connect = require('../connectDBMongo/connectDBMongo');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    // id: ObjectId,
    movieName: String,
    parameterName: String,
    lastName: String,
    duration: String,
    releaseYear: String,
    director: String,
    action: String,
    category: String,
    country: String,
    movieContent: String,
    time: Date,


    image: Buffer,





}, { collection: 'object' },
    { timestamps: true }
)

const ListVideo = mongoose.model('ListVideo', schema1);

const schema2 = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    token: String


},
    { timestamps: true }
)

const User = mongoose.model('User', schema2);



module.exports = { ListVideo, User }