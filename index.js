const express = require("express");
const app = express();

// Define your resume data as a JSON object
const resume = {
  name: "Juan Smith",
  email: "juan.smith@example.com",
  phone: "555-555-5555",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      year: "2015",
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Example",
      year: "2017",
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Example Inc.",
      location: "San Francisco, CA",
      startDate: "2017-01-01",
      endDate: "2021-06-30",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Senior Software Engineer",
      company: "Example Inc.",
      location: "San Francisco, CA",
      startDate: "2021-07-01",
      endDate: null,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

// Define your API endpoint for your resume
app.get("/resume", (req, res) => {
  res.json(resume);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
