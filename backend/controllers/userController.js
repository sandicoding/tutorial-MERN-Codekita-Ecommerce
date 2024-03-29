import User from '../models/userModel.js'
import expressHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get Token
// @route   Post /api/users/login
// @access  public

const authUser = expressHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})

// @desc    Register user 
// @route   Post /api/users
// @access  public

const registerUser = expressHandler(async (req, res) => {

    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('Email Alredy')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error("invalid data sdad")
    }

})

// @desc    get profile users
// @route   get /api/users/profile
// @access  private

const getUserProfile = expressHandler(async (req, res) => {

    // const user = await User.findById(req.user._id)

    // if (user) {

    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //     })
    // } else {

    //     res.status(404)
    //     throw new Error('User not Found')

    // }
})

// @desc    Update profile users
// @route   PUT /api/users/profile
// @access  private

const updateUserProfile = expressHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })

    } else {

        res.status(404)
        throw new Error('User not Found')

    }
})



export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile
}
