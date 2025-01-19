const db = require('../connection')

exports.fetchFiveBooks = () => {
    // * SQL query to speak database language with the database we will interact with
    /**
     * SQL query string to select all columns from the 'books' table.
     * The query limits the result set to 25 rows.
     *
     * This query is useful when you want to retrieve a small subset of data
     * from the 'books' table for display or processing purposes.
     *
     * SQL Keywords:
     * - SELECT: Used to specify the columns to retrieve.
     * - FROM: Specifies the table to query data from.
     * - LIMIT: Restricts the number of rows returned by the query.
     */
    const queryStr = `
    SELECT * from books
    LIMIT 25;
    `
    return db.query(queryStr)
        .then((result) => {
            return result.rows
        })
}