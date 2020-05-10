const mongoose = require('mongoose')
//const validator = require('validator')


const userSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true,
        trim: true
    },
    Municipio: {
        type: String,
        required: true,
        trim: true,
    },
    Coordenada: {
        type: String,
        required: true,
        trim: true,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User