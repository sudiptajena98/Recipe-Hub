import express from "express";
import "dotenv/config";
import connectDB from "./db/client.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import favouriteRoutes from "./routes/favouriteRoutes.js";
import trendingRoutes from"./routes/trendingRoutes.js";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/api", recipeRoutes);
app.use("/api", favouriteRoutes);
app.use("/api",trendingRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at", PORT);
  });
});