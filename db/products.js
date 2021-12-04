const client = require('../db/client');
//write a function that is going to add a product to the database
//it should take in a product object as an argument
//the function should return a promise
//the function should use the client to query the database
//the function should return the product object
//the function should throw an error if the product is not successfully added to the database

async function createProduct({ name, author, price, description, previousOwners, imageUrl }) {
    try {
      const {
        rows: [product],
      } = await client.query(
        `
           INSERT INTO routines("name", "author", "price", "description", "previousOwners", "imageUrl")
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING *;
           `,
        [name, author, price, description, previousOwners, imageUrl]
      );
     return product;
    } catch (error) {
      throw error;
    }
  }

  export default createProduct;


  