const express =require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  console.log("message", req.body)
  try {
    const customerData = req.body; // Get customer data from request body
    const customer = await prisma.customer.create({ data: customerData });
    res.json(customer); // Send created customer data as JSON response
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal server error" }); // Handle errors gracefully
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id); // Extract ID from URL parameter
    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
      include: { Booking: true }, // Include related bookings (optional)
    });
    if (customer) {
      res.json(customer);
    } else {
      console.log("hi");
      res.status(404).json({ error: "Customer not found" }); // Handle not found cases
    }
  } catch (error) {
    console.error("Error finding customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const updateData = req.body; // Get update data from request body
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId },
      data: updateData,
    });
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    await prisma.customer.delete({ where: { id: customerId } });
    res.sendStatus(204); // No content response for successful deletion
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports=router;