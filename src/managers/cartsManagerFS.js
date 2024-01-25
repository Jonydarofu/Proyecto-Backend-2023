const { REFUSED } = require('node:dns')
const { readFile } = require('node:fs')
const fs = require ('node:fs/promises')
const userRouter = require ('../routes/')
const cartsRouter = require ('../routes/')

class cartsManagerFS {
    constructor(){
        this.path = './src/jsonDb/carts.js'
    }
    async readFile(){
        try{
            const dataCarts = await fs.readFile(this.path,'utf-8')
            return JSON.parse(dataCarts)
        } catch (error){
            return []
        }
    }

    async createCarts(){
        try{
            const carts = await this.readFile()
            let newCart
            id: carts.length + 1,
            product : []

        } catch (error)
        return 
    }
    async getCartById(){}
    async addProductToCart(){}

}
 module.exports =  cartsManagerFS