
const express =require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(bodyParser.json());

router.post('/cars', async (req, res) => {
  try {
    const carData = req.body; // Get car data from request body
    const car = await prisma.car.create({ data: carData });
    res.json(car); // Send created car data as JSON response
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Internal server error" }); // Handle errors gracefully
  }
});

router.get('/cars/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id); // Extract ID from URL parameter
    const car = await prisma.car.findUnique({ where: { id: carId } });
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: "Car not found" }); // Handle not found cases
    }
  } catch (error) {
    console.error("Error finding car:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put('/cars/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    const updateData = req.body; // Get update data from request body
    const updatedCar = await prisma.car.update({
      where: { id: carId },
      data: updateData,
    });
    if (updatedCar) {
      res.json(updatedCar);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete('/cars/:id', async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    await prisma.car.delete({ where: { id: carId } });
    res.sendStatus(204); // No content response for successful deletion
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports=router;