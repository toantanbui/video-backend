const mongoose = require('mongoose');
//import mongoose from "mongoose"
const connect = require('../connectDBMongo/connectDBMongo');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    // id: ObjectId,
    movieName: {
        type: String,

        text: true



    },
    parameterName: {
        type: String,

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

    }
)

const ListVideo = mongoose.model('ListVideo', schema1);

//const abc = schema1.index({ text: true })


const abc = schema1.path('movieName').index({ text: true });
console.log('gia trị abc', abc)

ListVideo.createIndexes();




// const abc = ListVideo.ensureIndexes(
//     { movieName: "text" }
// )

//     ;
// const aa = ListVideo.listIndexes()
//     .then((data) => {
//         console.log('danh index la', data)


//     })








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