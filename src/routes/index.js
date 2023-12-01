
const express = require('express')
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const config = require('../config');
const { serviceRoutes } = require('./service.routes');
const { productRoutes } = require('./product.routes');
const { bookingRoutes } = require('./booking.routes');
const { branchRoutes } = require('./branch.routes');
const { settingRoutes } = require('./setting.routes');
const { manageRoutes } = require('./manage.routes');
const { userRoutes } = require('./user.routes');

const routes  = express.Router()


// write documents api swagger

const optionSwaggerUI = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Spa Booking API Documents',
        version: '1.0.0',
        description: 'API server app spa booking backend with Express.js',
        contact: {
          name: 'devhungtran',
          url: 'dev',
          email: 'devhungtran@gmail.com',
        },
      }
      ,
      servers: [
        {
          url: process.env.HOST,
        },
      ],
    },
    apis: ['./src/routes/*.js'],
  };
  const specs = swaggerJsdoc(optionSwaggerUI);

  routes.use('/api-documents', swaggerUI.serve, swaggerUI.setup(specs));



  routes.get('/', (req,res) =>{
      res.send('hi')
  })
  



  routes.use('/service', serviceRoutes) // ok
  routes.use('/product', productRoutes)
  routes.use('/branch', branchRoutes)
  routes.use('/booking', bookingRoutes)
  routes.use('/setting', settingRoutes) // ok'
  routes.use('/user', userRoutes) // ok

  routes.use('/manage', manageRoutes) // ok






module.exports = routes