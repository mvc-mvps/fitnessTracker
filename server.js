const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("images"));
app.use(routes);


// Route to display static src images
app.get("/static", (req, res) => {
  res.render("static");
});

// Route to display dynamic src images
app.get("/dynamic", (req, res) => {
  imageList = [];
  imageList.push({ src: "/public.img.fitlyfe4life-logo.png", name: "logo" });;
  res.render("dynamic", { imageList: imageList });
});

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
});