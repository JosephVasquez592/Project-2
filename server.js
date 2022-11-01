const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const routes = require('./controllers');
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });


const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SuperSecret,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);





// app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

//app.get('/', function (req, res) {
//  res.render('homepage');
//});
// app.get("/send", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/send.html"))
// );

// app.get("/paths", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/paths.html"))
// );

//app.listen(PORT, () => {
 // console.log(`Server listening at http://localhost:${PORT}`);
 // sequelize.sync({ force: false });
//});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});