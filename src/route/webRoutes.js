import express from "express"
import userController from '../controllers/userController'
import homeController from '../controllers/homeController'
import { checkUserJWT } from '../middleware/JWTAction'




let router = express.Router();

const webRoutes = (app) => {
    router.get('/', homeController.getAboutPage);
    // router.post('/crud-create-users', userController.handleCreateUser)

    router.post('/api/create-video', userController.handleCreateVideo);
    router.get('/api/get-all-video', userController.handleGetAllVideo);

    router.post('/api/update-one-video', userController.handleUpdateOneVideo);
    router.post('/api/delete-one-video', userController.handleDeleteOneVideo);

    router.post('/api/get-one-video-by-than-thoai', userController.handleGetOneVideoMythology);







    return app.use("/", router)
}

module.exports = webRoutes;