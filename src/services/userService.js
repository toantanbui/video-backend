

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

let handleUpdateOneVideo = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id

            ) {
                console.log('thiếu tham so', data)

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {


                console.log('gia tri tham so', data.idPosts)

                let users = await modelsMongo.ListVideo.find({
                    _id: data.id,

                })
                console.log('gt users la', users)
                console.log('gt users la [0]', users[0])
                if (!_.isEmpty(users[0])) {

                    await modelsMongo.ListVideo.update({

                        movieName: users[0].movieName,
                        parameterName: users[0].parameterName,
                        duration: users[0].duration,
                        releaseYear: users[0].releaseYear,
                        director: users[0].director,
                        action: users[0].action,
                        category: users[0].category,
                        movieLink: users[0].movieLink,
                        country: users[0].country,
                        movieContent: users[0].movieContent,
                        image: users[0].image,

                    },
                        {

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


                        })

                    resolve({
                        errCode: 0,
                        errMessage: 'Update success',
                    })
                }


            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleDeleteOneVideo = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {
                await modelsMongo.ListVideo.deleteOne({
                    _id: data.id
                })

                resolve({
                    errCode: 0,
                    errMessage: 'successful delete',

                })



            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleGetOneVideoMythology = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.category

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.ListVideo.find({
                    category: data.category

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
    handleCreateVideo, handleGetAllVideo, handleUpdateOneVideo, handleDeleteOneVideo,
    handleGetOneVideoMythology
}