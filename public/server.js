const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

const auth = require("./routes/auth");
const messages = require("./routes/messages");

app.use("/api/auth", auth);
app.use("/api/messages", messages);

// app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

// app.get("/send", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/send.html"))
// );

// app.get("/paths", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/paths.html"))
// );

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
