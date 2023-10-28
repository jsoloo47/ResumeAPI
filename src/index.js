const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(helmet());
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

//vercel
