const express = require('express');
const app = express();

const customerRoutes = require('./routes/customer');
const carRoutes = require('./routes/cars');
const hotelRoutes = require('./routes/hotels');
const tourGuideRoutes = require('./routes/tourguide');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const port = 1000;

// Enable body parsing
app.use(express.json());

// Mount routers
app.use('/customer', customerRoutes);
app.use('/cars', carRoutes);
app.use('/hotels', hotelRoutes);
app.use('/tourguide', tourGuideRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
