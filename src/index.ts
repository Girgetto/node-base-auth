import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import morgan from "morgan";
import * as masterRouter from "../routes/index";

const isProduction = process.env.NODE_ENV === "production";

const app = express();
const port = 8080; // default port to listen

app.use(cors());

// Normal express config defaults
app.use(morgan("dev", {
  skip(req, res) { return res.statusCode < 400; }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(require("method-override")());
app.use(express.static(__dirname + "/public"));

app.use(session({ secret: "conduit", cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/conduit");
  mongoose.set("debug", true);
}

app.use("/api", masterRouter);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
