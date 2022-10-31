const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

// app.get("/send", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/send.html"))
// );

// app.get("/paths", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/paths.html"))
// );

// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});