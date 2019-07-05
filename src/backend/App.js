const express = require("express");
const app = express();
const sortObjectArrayByName = require("./peopleService");
const port = 3001;

app.get("/rest/people", (req, res) => {
  res.send(sortObjectArrayByName ());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));