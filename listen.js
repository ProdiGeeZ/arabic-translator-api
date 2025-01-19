// Import the app module which contains the Express application
const app = require("./app");

// Destructure the PORT variable from process.env, defaulting to 3000 if not set
const { PORT = 3000 } = process.env;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));