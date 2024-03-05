const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect();
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};
