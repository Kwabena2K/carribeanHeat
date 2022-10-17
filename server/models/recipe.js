const mongoose = require("mongoose");

// Creating a mongoDB schema structure
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "This is a required field"
    },
     description: {
        type: String,
        required: "This is a required field"
    },
       email: {
        type: String,
        required: "This is a required field"
    },
         ingredients: {
        type: Array,
        required: "This is a required field"
    },
           category: {
               type: String,
               enum: ["Deep Fried", "Fried Rice", "Specials", "Soup" , "Chow Mein"],
        required: "This is a required field"
    },
                 image: {
               type: String,
               
        required: "This is a required field"
    },
});

module.exports = mongoose.model("recipe", recipeSchema)
