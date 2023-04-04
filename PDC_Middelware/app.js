const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGODB_URI, NODE_ENV,ORIGIN } = require("./config/sms");

// Application configurations
app.use(express.json());

app.use(
  cors()
);

// log in development environment

if (NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// index route
app.use('/', require('./router/router'));

app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

app.use("*", (req, res, next) => {
  const error = {
    status: 404,
    message: "API_ENDPOINT_NOT_FOUND_ERR",
  };
  next(error);
});

//global error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const status = 500;
  const message = err.message;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

// Application Routing


async function main() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("database connected");

    app.listen(3000, () => console.log(`Server listening on port ${3000}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();

