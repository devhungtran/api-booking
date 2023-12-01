
const express = require('express')
const { SignInWidthZalo } = require('../controllers/auth.controller')

const userRoutes  = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         - authorized
 *       properties:
 *         authorized:
 *           type: string
 *           description: Mã token
 *       example:
 *         authorized: Bear <AccessTokenZalo>
 */

/**
 * @swagger
 * tags:
 *   name: users
 *   description: API của người dùng
 */

/**
 * @swagger
 * /user/signin:
 *   post:
 *     summary: Đăng nhập tài khoản, nếu tài khoản chưa có thì nó auto tạo
 *     tags: [users]
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: The access token for authentication
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Some server error
 */


userRoutes.post('/signin', SignInWidthZalo)



module.exports = {
    userRoutes
}
