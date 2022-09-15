const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes/index.js");
const errHandler = require("./middlewares/errHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("hello");
  res.status(200).json({
    msg: "server alive"
  });
});
app.use(routes);
app.use(errHandler);

app.listen(PORT, () => {
  console.log(`listening on port`, PORT);
});
