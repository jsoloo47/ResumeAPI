const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
const morgan = require("morgan");

// Import routes
const resumeRoutes = require("./routes/resumeRoutes.js");

app.use(cors());
app.use(morgan("combined"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Use routes
app.use("/resume", resumeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
