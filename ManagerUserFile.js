const fs = require("node:fs");
const crypto = require("node:crypto");
const { error } = require("node:console");

class UserManagerFile {
  constructor() {
    this.path = "./mockDB/Users.json";
  }
  async readFileUsers() {
    try {
      const userData = await fs.promises.readFile(this.path,'utf-8');
        const usersJs = await JSON.parse (userData)
        return usersJs
    } catch (error) {
      return [];
    }
  }
  async createUser (newUser){
    try{
        let usersList = await this.readFileUsers()
        console.log (newUser)
        console.log (usersList)
        newUser.salt = crypto.randomBytes (128).toString ('base64')
        newUser.newPass = crypto.createHmac('sha256',newUser.salt).update(newUser.password).digest('hex')
        console.log(newUser)

        usersList.push(newUser)
        await fs.promises.writeFile(this.path, JSON.stringify(usersList. null, 2))

    } catch (error){
        console.log(error)
    }
  }
  async validateUser() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
