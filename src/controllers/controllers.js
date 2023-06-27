const path = require('path');
const user = require('../models/data');
const { allUsers, addUser, editUser, removeUser } = require('../services/dataAccess');

const homeView = (req,res) =>{
    const users = allUsers();
    console.log("🚀 ~ file: controllers.js:6 ~ homeView ~ users:", users)
    res.render('pages/home', 
    {
        title: 'Back End'
    } 
    )
}


const readUsers = (req,res) =>{
    const users = allUsers();
    
    res.render('pages/appUsers', 
        {
            title: 'Users Back End',
            users: users
        } 
    )
}
const createUser = (req,res) =>{
    const users = allUsers();
    const newUser = {
        id: users.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email
    }
    users.push(newUser);
    addUser(users);
    res.redirect('pages/appUsers', 
        {
            title: 'Users Back End',
            users: users
        } 
    )
}

const updateUser = (req,res) =>{

}
const deleteUser = (req,res) =>{
    const users =  allUsers();
    const deleted = users.filter((user)=>user.id != req.params.id)
    removeUser(deleted)
    res.render('pages/appUsers',
    {
        title: 'Users Back End',
        users: users
    }
    )
}

module.exports={
    homeView,
    createUser,
    readUsers,
    updateUser,
    deleteUser
}
