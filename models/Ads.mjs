import mongoose from 'mongoose'
const { Schema } = mongoose

const adsSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    detail: {
        required: true,
        type: String
    },
    Category: {
        required: true,
        type: String
    },
    Contact: {
        required: true,
        type: Number
    },
    // Picture: {
    //     required: true,
    //     type: String
    // },
})

const Ads = mongoose.model('Ads', adsSchema)

export default Ads;