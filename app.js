const express = require("express");
const db = require("./pkg/db/index");
const jwt = require("express-jwt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authHandler = require("./handlers/authHandler/authHandler");
const recipesHandler = require("./handlers/recipesHandler/recipesHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

db.init();

app.use(
  jwt
    .expressjwt({
      algorithms: ["HS256"],
      secret: process.env.JWT_SECRET,
      getToken: (req) => {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
          return req.headers.authorization.split(" ")[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null;
      },
    })
    .unless({
      path: ["/api/v1/auth/createaccount", "/api/v1/auth/login"],
    })
);

app.post("/api/v1/auth/createaccount", authHandler.createAccount);
app.post("/api/v1/auth/login", authHandler.login);

app.get("/recipes", recipesHandler.viewAll);
app.get("/recipes/:id", recipesHandler.viewOne);
app.post("/recipes", recipesHandler.create);
app.patch("/recipes/:id", recipesHandler.update);
app.delete("/recipes/:id", recipesHandler.delete);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Server can not start");
  } else console.log(`Server is running on port ${process.env.PORT}`);
});
