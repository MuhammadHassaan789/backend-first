import mongoose from 'mongoose'
const { Schema } = mongoose

const adSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    detail: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    location: {
        // required: true,
        type: Object,
    },
    contact: {
        // required: true,
        type: Number
    },
    images: {
        // required: true,
        type: [String]
    },
})

const Ad = mongoose.model('Ad', adSchema)

export default Ad;