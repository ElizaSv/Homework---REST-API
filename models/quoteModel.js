import mongoose from 'mongoose';
const quoteSchema = new mongoose.Schema(
    {
    topic: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    author : {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}
)
const Quote = mongoose.model("quote", quoteSchema)

export default Quote