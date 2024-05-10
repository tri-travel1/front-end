
const express = require('express');
const router = express.Router();

const prisma = require('../db');

router.post('/', async (req, res) => {
  try {
    const site = req.body.destination;
    const hotels = req.body.hotelid;
    const tour = req.body.TourGuideid;
    const rooms = req.body.num_rooms;
    const addd = req.body.adults;
    const childs = req.body.children;
    const date = req.body.start_date;
    const end = req.body.end_date;

    const bookings = await prisma.booking.create({
      data: {
        site:{
          connect: {
            id: +site
          }
        },
        hotel: {
          connect: {
            id: +hotels
          }
        },
        TourGuide: {
          connect: {
            id: +tour
          }
        },
        num_rooms: + rooms,
        adults: +addd,
        children: +childs,
        start_date: new Date(date),
        end_date: new Date(end),
        total_price: 0,
        car: {
          connect: {
            id: 3
          }
        },
        customer: {
          create: {
            name: "",
            email: '', password: '',
            phone_number: '',
          }
        }
      }
    })
    res.redirect('/profile')
    // res.json(bookings)
  } catch (error) {
    console.log("error creating list", error);
    res.status(500).json({ error: "internal server error" })

  }
})

module.exports = router