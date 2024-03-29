import express from "express";
import weatherRoute from "./routes/weather_routes.js";
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use("/api/weather", weatherRoute);
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});