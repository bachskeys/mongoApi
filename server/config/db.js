const mongoose = require("mongoose");

const dbURI =
  "mongodb://ludo:<password>@mongoapi-shard-00-00-wmqlt.mongodb.net:27017,mongoapi-shard-00-01-wmqlt.mongodb.net:27017,mongoapi-shard-00-02-wmqlt.mongodb.net:27017/test?ssl=true&replicaSet=mongoApi-shard-0&authSource=admin&retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
   useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Task");
