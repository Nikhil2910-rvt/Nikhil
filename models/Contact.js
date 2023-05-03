const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required:true, unique:true},
        email: { type: String, required: true, unique: true},
        description: { type: String, required: true, unique: true},
    },
    { timestamps: true }
)

module.exports = mongoose.model('Contact', contactSchema);