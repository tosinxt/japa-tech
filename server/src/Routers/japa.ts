import express from "express";
import { service_tester } from "../Controllers/japa.js";

export default (router: express.Router) => {
  router.get("/", service_tester);
};
