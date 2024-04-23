import { getWeather, searchByCity } from "../controller/weatherController.js";
import express from "express";

const router = express.Router();

router.get("/", getWeather);

router.get("/:input", searchByCity);

export default router;