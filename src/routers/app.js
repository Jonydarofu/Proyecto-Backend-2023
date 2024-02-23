import express from "express";
import logger from "morgan";

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(logger('dev'))


app.get("/", (request, response) => {
  response.send("Hola mundo");
});
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log();
});
