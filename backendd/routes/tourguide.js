const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json()); 
router.get('/api/v1/guides', async (req, res) => {
  try {
    const guides = await prisma.guide.findMany();
    res.json(guides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching guides' });
  }
});

router.get('/api/v1/guides/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const guide = await prisma.guide.findUnique({
      where: { id: parseInt(id) },
    });
    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json(guide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching guide' });
  }
});


router.put('/api/v1/guides/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGuide = await prisma.guide.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    if (!updatedGuide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json(updatedGuide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating guide' });
  }
});



router.delete('/api/v1/guides/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGuide = await prisma.guide.delete({
      where: { id: parseInt(id) },
    });
    if (!deletedGuide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json({ message: 'Guide deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting guide' });
  }
});

module.exports=router;
