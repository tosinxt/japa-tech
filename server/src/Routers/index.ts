import express, { Router } from "express";
import japa from "./japa.js";
import register from "./registration.js";
import users from "./users.js";
import admin from "./admin.js";

const router = express.Router();

export default (): express.Router => {
  japa(router);
  register(router);
  users(router);
  admin(router);
  return router;
};
