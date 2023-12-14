const { Mongoose } = require("mongoose");
const express = require("express");
const {
  getNotification,
  createNewNotification,
} = require("../controllers/notifi.controller");
const notifi = express.Router();

/**
 * @swagger
 * tags:
 *   name: notifications
 *   description: API của thông báo popup
 */

/**
 * @swagger
 * /notification:
 *   get:
 *     summary: Trả về tất cả dịch vụ
 *     tags: [notifications]
 *     responses:
 *       200:
 *         description: The list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */

notifi.get("/", getNotification);

notifi.post("/create", createNewNotification);

module.exports = { notifi };
