// code to build and initialize DB goes here
const {
    createUser,
   } = require('./');
  const client = require("./client");
  async function dropTables() {
    // drop all tables, in the correct order
    try {
      console.log("Starting to drop tables...");
      await client.query(`
          DROP TABLE IF EXISTS users;
          DROP TABLE IF EXISTS products;
        `);
      console.log("Finished dropping tables!");
    } catch (error) {
      console.error("Error dropping tables!");
      console.log(error, "!!!!!!!");
      throw error;
    }
  }
  async function createTables() {
    // create all tables, in the correct order
    try {
      console.log("Starting to build users table...");
      await client.query(`
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL  
        );`);
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building users table!");
      throw error;
    }

    try {
      console.log("Starting to build products table...");
      await client.query(`
        CREATE TABLE products(
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price DECIMAL(10,2) NOT NULL,
          current_owner VARCHAR(255) NOT NULL,
          author VARCHAR(255) NOT NULL,          
          
          image_url VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL
          previous_owners VARCHAR(2000) NOT NULL
        );`);
      console.log("Finished building products table!");
    } catch (error) {
      console.error("Error building products table!");
      throw error;
    }
  }
  async function createInitialUsers() {
    console.log("Starting to create users...");
    try {
      const usersToCreate = [
        { username: "Christian", password: "1111" },
        { username: "Evan", password: "2222" },
        { username: "Daniel", password: "3333" },
        { username: "Albert", password: "bertie99" },
        { username: "Dandra", password: "sandra123" },
        { username: "Glamgal", password: "glamgal123" },
        { username: "Bob", password: "4444" },
        { username: "Dylan", password: "5555" },
        { username: "Michael", password: "6666" },
        { username: "Chico", password: "7777" },
        { username: "Chicka", password: "8888" },
      ];
      const users = await Promise.all(usersToCreate.map(createUser));
      console.log("Users created:");
      console.log(users);
      console.log("Finished creating users!");
    } catch (error) {
      console.error("Error creating users!");
      throw error;
    }
  };
  async function rebuildDB() {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
    } catch (error) {
      console.log("Error during rebuildDB");
      throw error;
    }
  }
  rebuildDB();