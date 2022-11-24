import express from "express"
import bodyParser from "body-parser";
//import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB'

const viewEngine = require('./config/viewEngine')

require("dotenv").config();

let app = express();
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
//app.use(express.static('../src/public'));
app.use('/public', express.static(__dirname + '/public' ));

viewEngine.configViewEngine(app);
initWebRoutes(app);

connectDB();

let port =  process.env.PORT ||6969;
app.listen(port, () =>{
    console.log("Backend Nodejs is runing on the port: " + port);
})