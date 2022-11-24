import express from "express";
import homeController from "../controlers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);
    router.get('/thaivanthien', homeController.database);
    router.get('/aboutme',homeController.aboutMe);
    
    router.post('/test',homeController.test);

    router.post('/database',homeController.database);
    
    return app.use("/",router);
}

module.exports = initWebRoutes;