const path = require('path');
const user = require('../models/data');
const { allUsers, addUser, editUser, removeUser } = require('../services/dataAccess');

const homeView = (req,res) =>{
    const users = allUsers();

    res.render('pages/home', 
    {
        title: 'Back End'
    } 
    )
}
const createUser = (req,res) =>{
    const users = allUsers();
    let newId = users.length + 1

    const newUser = {
        id: newId,
        nombre: req.body.addNombre,
        apellido: req.body.addApellido,
        email: req.body.addEmail
    }
    console.log("🚀 ~ file: controllers.js:35 ~ createUser ~ newUser:", newUser)
    users.push(newUser);
    addUser(users);
    res.redirect('/appUsers');
}

const readUsers = (req,res) =>{
    const users = allUsers();
    res.render('pages/appUsers', 
        {
            title: 'Users Back End',
            users,
            user
        } 
    )
}

const updateUser = (req,res) =>{
    const users =  allUsers(); 
    const user = users.find((user)=>user.id == req.params.id)
    user.nombre = req.body.editNombre;
    user.apellido = req.body.editApellido;
    user.email = req.body.editEmail;
    editUser(users)
    res.redirect('/appUsers');
}

const deleteUser = (req,res) =>{
    const users =  allUsers();
    const deleted = users.filter((user)=>user.id != req.params.id)
    // Actualizar los IDs de forma correlativa
  const listaConIdNew = deleted.map((user, index) => ({
    ...user,
    id: index + 1,
  }));
    removeUser(listaConIdNew)
    res.redirect('/appUsers');
}

module.exports={
    homeView,
    createUser,
    readUsers,
    updateUser,
    deleteUser
}
