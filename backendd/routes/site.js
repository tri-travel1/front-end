const express= require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());
router.post('/',async(req,res)=>{
  try {
    const siteData = req.body;
    const sites = await prisma.site.create({data:{
      country: siteData.place,
      image_url:"",
      name: ""
    }});
    res.json(sites);
  } catch (error) {
    console.log("error finding site",error);
    res.status(500).json({error:"internal server error"})
  }
})

router.get('/:id',async(req,res)=>{
  try {
     const siteId = parseInt(req.params.id);
     const sites= await prisma.site.findUnique({where:{id:siteId}});
     if(sites){
      res.json(sites)
     } else{
      res.status(404).json({error:"site not found"})
     }
  } catch (error) {
    console.log("error finding site");
    res.status(500).json({error:"interna server error"})
  }
})

router.put('/:id',async(req,res)=>{
  try {
    const siteId = parent(req.params.id);
    const updatedData = req.body;
    const updated =await prisma.site.update({
      where:{id:siteId},
      data:updatedData,

    });
    if(updated){
      res.json(updated)
    } else{
      res.status(400).json({error:"site not founde"})
    }
    
  } catch (error) {
    console.log("error updating place");   
    res.status(500).json({error:"internal server error"}) 
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    const siteId = parseInt(req.params.id);
    await prisma.site.delete({where:{id:siteId}})
    res.sendStatus(204)
    
  } catch (error) {
    console.log("error deleting site");
    res.status(500).json({error:"internal server error"})
    
  }
})

module.exports=router;