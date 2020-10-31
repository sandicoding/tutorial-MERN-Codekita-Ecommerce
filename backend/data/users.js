import bcrypt from 'bcryptjs'



const users = [
    {
      name : "Admin User",
      email : "admin@example.com",
      password : bcrypt.hashSync('123456', 10),
      isAdmin : true  
    },
    {
        name : "Dodi",
        email : "dodi@example.com",
        password : bcrypt.hashSync('123456', 10),
    },
    {
        name : "Doni",
        email : "doni@example.com",
        password : bcrypt.hashSync('123456', 10),  
    },
]


export default users;