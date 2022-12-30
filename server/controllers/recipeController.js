require("../models/database")
const Category = require("../models/Category")
const recipe = require("../models/recipe")


// GET /
// Homepage controller

exports.homepage = async (req, res) => {

    try {
    // Database query to grab the categories

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await recipe.find({}).sort({ _id: -1 }).limit(limitNumber);


        const food = { latest };


  res.render("index", {title: "Carribean Heat - Online Menu", categories, food});   
} catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
}
  
};



// GET /categories
// Categories controller
exports.categories = async (req, res) => {

    try {
    // Database query to grab the categories

        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
  res.render("categories", {title: "Carribean Heat - Categories", categories});   
} catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
}   
};

// async function insertDymmycategoryData() {
//     try {
//         await Category.insertMany(    [{
//         "name": "Combo's",
//         "image": "combo-meal.jpg"
//     },
//         {
//         "name": "Deep Fried",
//         "image": "deep-fried.jpg"
//         },
//         {
//         "name": "Fried Rice",
//         "image": "fried-rice.jpg"
//         },
//         {
//         "name": "Specials",
//         "image": "specials.jpg"
//         },
//         {
//         "name": "Soup",
//         "image": "soup.jpg"
//         },

//     ]
// );
//     } catch (error) {
//         console.log("err", + error)
//     }
// }
// insertDymmycategoryData();
 







// async function insertDymmyrecipeData() {
//     try {
//         await recipe.insertMany();
//     } catch (error) {
//         console.log("err", + error)
//     }
// }
// insertDymmyrecipeData();