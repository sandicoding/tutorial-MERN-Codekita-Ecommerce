//menggunakan packgae mongoose
import mongoose from 'mongoose'

//bikin schema
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false
    }
}, {
    timestamps : true
})

//bikin varibale untuk menampung schema yang di buat
const User = mongoose.model('User', userSchema);

//export variabel User untuk di gunakan 
export default User;

