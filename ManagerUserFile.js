const fs = require("node:fs");
const crypto = require("node:crypto");
const { error } = require("node:console");

class UserManagerFile {
  constructor() {
    this.path = "./mockDB/Users.json";
  }
  async createUser() {
    try {
      const user = await fs.promises("");
    } catch (error) {
      console.log(error);
    }
  }
  async validateUser() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
