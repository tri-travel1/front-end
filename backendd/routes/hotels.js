const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json()); 
router.post('/hostels',async(req,res)=>{
  try {
    const hotelData = req.body;
    const hotel  = await prisma.Hotel.create({data:hotelData});
    res.json(hotel);
  } catch (error) {
    console.log("error creating hotel",error);
    res.status(500).json({error:"internal server error"});
    
  }
});

router.get('/hotels/:id' , async(req,res)=>{
  try {
    const hotelId = parseInt(req.params.id);
    const hotel = await prisma.Hotel.findUnique({where:{id:hotelId}});
    if(hotel){
      res.json(hotel);
    } else {
      res.status(404).json({error:"hotel not found"});
    }
  } catch (error) {
    console.log("error finding hotel",error);
    res.status(500).json({error:"internal server error"})
    
  }
});

router.put('/hotels/:id',async(req,res)=>{
  try {
     const hotelId=parseInt(req.params.id);
     const updateData = req.body;
     const updatedHoteldata = await prisma .Hotel.update({
      where:{id:hotelId},
      data:updateData,
     });
     if(updatedHoteldata){
      res.json(updatedHoteldata);
     } else {
      res.status(404).json({error:"hotel not found"})
     }
    
  } catch (error) {
    console.log("error updating cartype");
    res.status(500).json({error:"internal server error"})
  }
});

router.delete('/hotels/:id', async(req,res)=>{
  try {
    const hotelId = parseInt(req.params.id);
    await prisma.Hotel.delete({where:{id:hotelId}});
    res.sendStatus(204)
  } catch (error) {
    console.log("error deleting hotel");
    res.status(500).json({error:"internal server erroro"})
  }
})

module.exports=router;

