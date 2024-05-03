const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const customerRoutes = require('./routes/customer');
const carRoutes = require('./routes/cars');
const hotelRoute = require('./routes/cars');
const tourGuideroute = require('./routes/tourguide')

const prisma = new PrismaClient();

const port =1000
// Enable body parsing

app.use(bodyParser.json());







// Mount routers
app.use('/customer', customerRoutes);
app.use('/cars', carRoutes);
app.use('/hotels',hotelRoute);
app.use('/tourguide',tourGuideroute);


app.listen(port,()=>{console.log(`server running on port ${port}`);})
