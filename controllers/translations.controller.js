// * Controllers route requests to models and pass user input to models.

// Import the fetchFiveBooks function from the models/translations.controller file
const { fetchFiveBooks } = require("../models/translations.controller");

// Define a controller function to handle the "Hello World" route
exports.getHelloWorld = (req, res, next) => {
    // Send a response with status 200 and a message "Hello World"
    res.status(200).send({ msg: "Hello World" });
}

// Define a controller function to handle the "getBooks" route
exports.getBooks = (req, res, next) => {
    // Call the fetchFiveBooks function to get a list of books
    fetchFiveBooks()
        .then((books) => {
            // If successful, send a response with status 200 and the list of books
            res.status(200).send({ books });
        }).catch((err) => {
            // If there is an error, log the error message
            console.log("something went wrong", err);
        });
}
