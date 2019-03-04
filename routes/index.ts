import express from "express";
// define a route handler for the default home page
express.Router().get("/", (req, res) => {
  res.send("Hello world!!!!!");
});

// router.use('/api', require('./api'));

export default express;
