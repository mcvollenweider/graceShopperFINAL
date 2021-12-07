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
      console.log("Starting to build tables...");
      await client.query(`
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL  
        );`);
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  }
  async function createInitialUsers() {
    console.log("Starting to create users...");
    try {
      const usersToCreate = [
        { username: "christian", password: "1111" },
        { username: "evan", password: "2222" },
        { username: "daniel", password: "3333" },
        { username: "albert", password: "bertie99" },
        { username: "sandra", password: "sandra123" },
        { username: "glamgal", password: "glamgal123" },
        { username: "bob", password: "4444" },
        { username: "dylan", password: "5555" },
        { username: "michael", password: "6666" },
        { username: "chico", password: "7777" },
        { username: "chicka", password: "8888" },
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