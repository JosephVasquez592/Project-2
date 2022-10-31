const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

const auth = require("./routes/auth");
const messages = require("./routes/messages");

app.get("/", (req, res) => {
  res.send("Visit http://localhost:3001/api");
});

app.post("/", (req, res) => {
  res.send();
});

app.all("/api/auth", auth); //middleware
app.use("/api/messages", messages);

app.put("/user", (req, res) => {
  res.send();
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
