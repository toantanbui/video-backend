import express from "express"
import userController from '../controllers/userController'
import homeController from '../controllers/homeController'
import { checkUserJWT } from '../middleware/JWTAction'




let router = express.Router();

const webRoutes = (app) => {
    router.get('/', homeController.getAboutPage);
    // router.post('/crud-create-users', userController.handleCreateUser)

    router.post('/api/login', userController.handleLoginUsers);
    router.post('/api/sign-up', userController.handleSignup);
    router.get('/api/logout', userController.handleLogout);

    router.post('/api/get-video-text-search', userController.handleGetVideoTextSearch);

    router.post('/api/create-video', checkUserJWT, userController.handleCreateVideo);
    router.get('/api/get-all-video', userController.handleGetAllVideo);

    router.post('/api/update-one-video', checkUserJWT, userController.handleUpdateOneVideo);
    router.post('/api/delete-one-video', checkUserJWT, userController.handleDeleteOneVideo);

    router.post('/api/get-one-video-by-than-thoai', userController.handleGetOneVideoMythology);
    router.post('/api/get-one-video-by-gia-dinh', userController.handleGetOneVideoFamily);
    router.post('/api/get-one-video-by-id', userController.handleGetOneVideoId);








    return app.use("/", router)
}

module.exports = webRoutes;