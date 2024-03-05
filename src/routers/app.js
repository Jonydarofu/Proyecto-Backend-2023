import express from "express";
import logger from "morgan";
import handlebars from 

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(logger('dev'))

app.engine ("handlebars", handlebars.engine())
app.set('views, __dirname +  "/view"')
app.set("view engine", "handlebars")

app.use(appRouter)

app.get("/", (request, response) => {
  response.send("Hola mundo");
});
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Servidor escuchando en el puerto ${PORT}');
});
