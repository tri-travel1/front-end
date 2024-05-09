const express = require('express');
const app = express();
const customerRoutes = require('./routes/customer');
const carRoutes = require('./routes/cars');
const hotelRoutes = require('./routes/hotels');
const tourGuideRoutes = require('./routes/tourguide');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path')
const bodyParser = require('body-parser')

const port = 1000;
// app.use('')
app.set('view engine', 'ejs');

// Enable body parsing
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'../public')))

// app.get('/',(req,res)=>{
//   res.send('hi')
//   console.log("helow");
// })
// Mount routers
app.use('/customer', customerRoutes);
app.use('/cars', carRoutes);
app.use('/hotels', hotelRoutes);
app.use('/tourguide', tourGuideRoutes);


app.get('/explore', async (_, res) => {
const cars  = await prisma.car.findMany();
const hotels  = await prisma.hotel.findMany();
const tourguides  = await prisma.tourGuide.findMany();
const sites  = await prisma.site.findMany();

return res.render('explore', {
    cars,hotels, tourguides, sites
})
 
})

app.listen(port, () => console.log(`Server running on port ${port}`));
