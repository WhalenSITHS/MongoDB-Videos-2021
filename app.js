const express = require("express"); //this file requires express
const port = process.env.PORT || 3000; //use external server port OR local 3000
const app = express(); //instantiate express
require("./DB/mongoose"); //ensures mongoose connects and runs
const routes = require("./Routes/index");
const request = require("request");
const fetch = require("node-fetch");
//takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());
const call = "https://pokeapi.co/api/v2/pokemon/ditto";
app.use("/", routes);
app.get("/test", () => {
  fetch(`${call}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
});
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
