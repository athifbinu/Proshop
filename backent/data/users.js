const bcrypt=require('bcryptjs')

const users = [
    {
        name:"Admin User",
        email:"admin@examole.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"john Doe",
        email:"john@examole.com",
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:"jane Doe",
        email:"jane@examole.com",
        password:bcrypt.hashSync('123456',10),
        
    }
]

  module.exports = users


