const db = require("../models");

let createUser = async(data) => {
    console.log('data from crudservices');
    console.log(data);
    
    return new Promise(async(resolve,reject) => {
        try {
            await db.User.create({
                
                email: data.email,
                password: data.password
            })
            resolve('create user complete');
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    createUser: createUser,
}