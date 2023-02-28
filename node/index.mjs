import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.send("Version: 2.0.0: Hello from host: " + os.hostname);
});

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
