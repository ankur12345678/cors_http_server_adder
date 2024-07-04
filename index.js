const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const ret_value = a + b;
  res.json({
    value: ret_value,
  });
});

app.listen(3000);
