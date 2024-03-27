const express = require("express");
const compression = require("compression");

const app = express();
const port = 5173;

// Add ETags middleware
app.set("etag", true);

// Enable compression middleware
app.use(compression());

// Serve static files from the parent directory
app.use(express.static("../dist"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
