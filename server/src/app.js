const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes/index.js");

const app = express();
const port = 2000;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", router);

app.listen(port, async () => {
  console.log(`App running on port http://localhost:${port}/`);
});

module.exports = { app };
