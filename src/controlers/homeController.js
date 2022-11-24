import express from "express";
import db from '../models/index'
import CRUDservices from '../services/CRUDservices'
import ejs from "ejs"

let getHomePage = async(req,res) => {
    return res.render('homePage.ejs');
};

let database = async(req,res) => {
    let message = await CRUDservices.createUser(req.body);
    console.log(message);
    return ejs.render('database.ejs',{
        data: message,
    });
};

let aboutMe = (req,res) => {
    return res.render('test/about.ejs');
};

let test = (req,res) => {
    console.log(req.body);
    return res.send(req.body);
}

module.exports =  {
    getHomePage: getHomePage,
    database: database,
    aboutMe: aboutMe,
    test:test
}