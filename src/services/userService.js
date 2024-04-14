

const _ = require('lodash');
const mongoose = require('mongoose');
import { createJWT } from '../middleware/JWTAction';
import modelsMongo from '../modelsMongo/modelsMongo';

const ObjectId = mongoose.Types.ObjectId;



// let handleLoginUsers = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!data.email || !data.password) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'Missing parameter'
//                 })

//             } else {

//                 // let users = await db.Users.findOne({
//                 //     where: {
//                 //         email: data.email,
//                 //         password: data.password,

//                 //     }
//                 // })

//                 let users = await modelsMongo.Users.find({
//                     email: data.email,
//                     password: data.password,

//                 })

//                 console.log("gia trị dang nhap", users)


//                 if (!_.isEmpty(users)) {
//                     let token = createJWT({
//                         email: data.email,
//                         password: data.password,

//                         expiresIn: '1h'
//                     });


//                     resolve({
//                         errCode: 0,
//                         errMessage: 'successful login',
//                         data: users[0]._id,
//                         token1: token

//                     });
//                 }
//                 else {
//                     resolve({
//                         errCode: 2,
//                         errMessage: 'Wrong account or password, the account has not been confirmed',

//                     });
//                 }

//             }

//         } catch (e) {
//             reject(e)


//         }
//     })
// }

let handleCreateVideo = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.movieName || !data.parameterName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {


                await modelsMongo.ListVideo.create({
                    movieName: data.movieName,
                    parameterName: data.parameterName,
                    duration: data.duration,
                    releaseYear: data.releaseYear,
                    director: data.director,
                    action: data.action,
                    category: data.category,
                    movieLink: data.movieLink,
                    country: data.country,
                    movieContent: data.movieContent,
                    image: data.image,
                    time: new Date(),

                })



                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleGetAllVideo = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (false

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.ListVideo.find({
                })

                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}





module.exports = {
    handleCreateVideo, handleGetAllVideo
}