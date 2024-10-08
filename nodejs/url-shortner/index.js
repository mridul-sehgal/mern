const express = require("express");
const { connectToMongoDB } = require("./connection");
const app = express();
const PORT = 8001;
const path = require("path");
const URL = require("./models/url_model");
const cookieParser=require("cookie-parser")
const {restrictToLoggedInUserOnly,checkAuth}=require("./middlewares/middle_auth")

//Routes
const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url_router");
const userRoute=require("./routes/users")


connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use("/url",restrictToLoggedInUserOnly, urlRoute);
app.use("/",checkAuth, staticRoute);
app.use("/user", userRoute);


app.get("/test", async (req, res) => {
  const all = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT number: ${PORT}`);
});
