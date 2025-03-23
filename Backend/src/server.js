import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app.js";

// Load environment variables
dotenv.config();

// Set port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
// connectDB();

// Create HTTP Server
const server = createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
