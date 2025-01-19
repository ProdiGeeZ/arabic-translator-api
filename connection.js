// Import the Pool class from the 'pg' (node-postgres) module to manage a pool of connections to the PostgreSQL database
const { Pool } = require("pg");

// Import the dotenv module to load environment variables from a .env file into process.env
const dotenv = require("dotenv");

// Determine the current environment (development or production). Default to 'development' if NODE_ENV is not set
const ENV = process.env.NODE_ENV || "development";

// Load environment variables from the appropriate .env file based on the current environment
if (ENV === "production") {
    dotenv.config({ path: '.env.production' }); // Load from .env.production in production
} else {
    dotenv.config(); // Load from .env in development
}

// Ensure that either PGDATABASE or DATABASE_URL environment variable is set, otherwise throw an error
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
    throw new Error("Environment variable PGDATABASE or DATABASE_URL is not set");
}

// Initialize an empty configuration object for the database connection pool
const poolConfig = {};

// If the environment is production, configure the pool with additional settings
if (ENV === "production") {
    // Ensure that DATABASE_URL is set in the production environment, otherwise throw an error
    if (!process.env.DATABASE_URL) {
        throw new Error(
            "Environment variable DATABASE_URL is required in production environment"
        );
    }

    // Set the connection string to the value of DATABASE_URL
    poolConfig.connectionString = process.env.DATABASE_URL;

    // Enable SSL with certificate validation disabled (not recommended for production use)
    poolConfig.ssl = {
        rejectUnauthorized: false
    };

    // Set the maximum number of clients in the pool to 20
    poolConfig.max = 20;
}

// Export a new instance of the Pool class, configured with the settings in poolConfig
module.exports = new Pool(poolConfig);
