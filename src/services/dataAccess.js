const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/data.json');

const allUsers = () =>{
    const users = fs.readFileSync(usersFilePath, 'utf-8');
    const userObjetc = JSON.parse(users);
    return userObjetc.users;
}

const addUser = (users) =>{
    const usersList = JSON.stringify({ users }, null, 2);
    fs.writeFileSync(usersFilePath, usersList);
}

const editUser = (listaConIdNew) =>{
    const newListUsers = '{"users": ' + JSON.stringify(listaConIdNew, null, 2) + '}';
    fs.writeFileSync(usersFilePath, newListUsers);
}

const removeUser = (deleted) =>{
    const newListUsers = '{"users": '+ JSON.stringify(deleted, null, 2) +'}'
    fs.writeFileSync(usersFilePath, newListUsers)
}

module.exports = {
    allUsers,
    addUser,
    editUser,
    removeUser
}