const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
// Load env vars
// const configPath="./config/config.env"
const configPath="./config/configTest.env"
// Load env vars
dotenv.config({
  path:configPath ,
  // debug: true,
});


// Connect to database...
connectDB();

// Route files
const setting = require("./routes");

// Body parser
app.use(express.json({ limit: "250mb" }));

// Cookie parser
app.use(cookieParser());
// app.use(checkLimitationSpot);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// File uploading
app.use(
  fileUpload({
    createParentPath: true,
    abortOnLimit: true,
    fileSize: 90000000,
  })
);
// Sanitize data
app.use(mongoSanitize());
// Set security headers
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Prevent http param pollution
app.use(hpp());
app.use(cors());

// Set static folder
var public = path.join(__dirname, "public");
app.use(express.static(public));

// Mount routers
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ash&More Setting Service API',
      version: '1.0.0',
      description: 'This APIDocs is for setting service',
    },
    servers: [
      {
        url: 'http://localhost:7000/api/v1/setting',
      },
      {
        url: 'https://ashmoresetting.onegroupinnovate.com/api/v1/setting',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/v1/setting", setting);
app.use(errorHandler);

const PORT = process.env.PORT || 7030;

const expressServer = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close expressServer & exit process
  // expressServer.close(() => process.exit(1));
});

module.exports = {
  app,
};
