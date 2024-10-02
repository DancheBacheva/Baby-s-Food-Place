const express = require("express");
const db = require("../../pkg/db/index");
const cors = require("cors");
const jwt = require("express-jwt");

const recipesHandler = require("./recipesHandler/recipesHandler");

const app = express();

db.init();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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
      path: ["/api/v1/recipe"],
    })
);

app.get("/api/v1/recipe", recipesHandler.viewAll);
app.get("/api/v1/recipe/:id", recipesHandler.viewOne);
app.post("/api/v1/recipe", recipesHandler.uploadPhoto, recipesHandler.create);
app.patch(
  "/api/v1/recipe/:id",
  recipesHandler.uploadPhoto,
  recipesHandler.update
);
app.delete("/api/v1/recipe/:id", recipesHandler.delete);

app.listen(process.env.PORTRECIPES, (err) => {
  if (err) {
    return console.log("Server can not start");
  }
  console.log(`Server started successfully on port ${process.env.PORTRECIPES}`);
});
