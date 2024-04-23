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

let handleUpdateOneVideo = async (req, res) => {
    try {
        let users = await userService.handleUpdateOneVideo(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleDeleteOneVideo = async (req, res) => {
    try {
        let users = await userService.handleDeleteOneVideo(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetOneVideoMythology = async (req, res) => {
    try {
        let users = await userService.handleGetOneVideoMythology(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetOneVideoId = async (req, res) => {
    try {
        let users = await userService.handleGetOneVideoId(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetOneVideoFamily = async (req, res) => {
    try {
        let users = await userService.handleGetOneVideoFamily(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleLoginUsers = async (req, res) => {
    try {
        let users = await userService.handleLoginUsers(req.body);
        await res.cookie("jwt", users.token1, { httpOnly: true })

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}
let handleSignup = async (req, res) => {
    try {
        let users = await userService.handleSignup(req.body);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleLogout = async (req, res) => {
    try {
        let users = await userService.handleLogout();
        await res.cookie("jwt", "dang-xuat", { httpOnly: true })
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetVideoTextSearch = async (req, res) => {
    try {
        let users = await userService.handleGetVideoTextSearch(req.body);

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetAllVideoByTime = async (req, res) => {
    try {
        let users = await userService.handleGetAllVideoByTime();

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetVideoCategoryOrCountry = async (req, res) => {
    try {
        let users = await userService.handleGetVideoCategoryOrCountry(req.body);

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
    handleCreateVideo, handleGetAllVideo, handleUpdateOneVideo, handleDeleteOneVideo,
    handleGetOneVideoMythology, handleGetOneVideoId, handleGetOneVideoFamily, handleLoginUsers,
    handleSignup, handleLogout, handleGetVideoTextSearch, handleGetAllVideoByTime,
    handleGetVideoCategoryOrCountry
}