import express from "express";
import http from 'http';
import path from 'path';
import methods from 'methods';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import errorhandler from 'errorhandler';
import mongoose from 'mongoose';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!!!!!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
