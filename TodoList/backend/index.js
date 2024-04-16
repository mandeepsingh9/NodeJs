const express = require("express");

const connect = require("./database/db.js");
const  route  = require("./Router/todoRoute.js");
const cors=require("cors");
const app = express();
connect();

//.......middleware........//

app.use(express.json());
app.use(cors())
//..............Router........./

app.use("/api",route)

const port =  8080;

app.listen(port, () => {
    console.log(`App is listening on Port ${port}`);
});
