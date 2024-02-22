const mongoose = require("mongoose")

export.connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://jonathan071:<Fucina-1307>@jonydarofu.sgp0xpo.mongodb.net/?retryWrites=true&w=majority' )
        console.log('Base de datos conectada');
    } catch (error){
        console.log('Error al conectar a la base de datos');
    }
}