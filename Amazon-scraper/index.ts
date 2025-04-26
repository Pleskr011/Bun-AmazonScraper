import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 8080;

app.use("/api", userRoutes); //Prefix routes with '/api'

//app.get("/", (req, res) => {
//  res.send("Hello Bun people!");
//});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});