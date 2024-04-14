import userService from '../services/userService'



// let handleLoginUsers = async (req, res) => {
//     try {
//         let users = await userService.handleLoginUsers(req.body);
//         await res.cookie("jwt", users.token1, { httpOnly: true })

//         return res.status(200).json(users)



//     } catch (e) {
//         console.log(e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: 'server error'
//         })


//     }
// }
let handleCreateVideo = async (req, res) => {
    try {
        let users = await userService.handleCreateVideo(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetAllVideo = async (req, res) => {
    try {
        let users = await userService.handleGetAllVideo();

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}






module.exports = {
    handleCreateVideo, handleGetAllVideo
}