"use strict"

const { mongoose } = require ("../configs/dbConnection")

//user model

const passwordEncrypt = require("../helpers/passwordEncrypt")

const UserSchema = new mongoose.Schema ({

    username:{
        type:String,
        trim:true,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        trim:true,
        required:true,

        set: (password) => {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
                return passwordEncrypt(password)
            } else {
                throw new Error('Password type is not correct.')
            }
        },

    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            'Email type is not correct.'
        ]
    },

    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    image: {
        type: String,
        trim: true,
        required: true
    },
   
    bio: {
        type: String,
        trim: true,
        required: true
    }
   

},{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)