const express = require("express"); //this file requires express
const port = process.env.PORT || 3000; //use external server port OR local 3000
const app = express(); //instantiate express
const routes = require("./Routes/index");
//takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
