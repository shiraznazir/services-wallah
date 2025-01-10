const express = require('express');
const multer = require('multer'); // Import multer
const Customer = require('../models/Enquiry');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Create a new customer
router.post('/', upload.none(), async (req, res) => {
  const { name, email, mobileNumber, pincode, message, address, type } = req.body;
  console.log("Body>>>>>>>>>", req.body);
  
  // Validation (Optional)
  if (!name || !email || !mobileNumber || !pincode || !message || !address || !type) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Save customer data to the database (including file path)
    const newCustomer = new Customer({
      name,
      email,
      mobileNumber,
      pincode,
      message,
      address,
      type,
      status: 0,
    });
    
    const savedCustomer = await newCustomer.save();
  console.log("savedCustomer>>>>>>>>>", savedCustomer);
  
    res.status(201).json({
      message: 'Customer added successfully',
      customer: savedCustomer,
      status: true,
    });
  } catch (err) {
    console.error('Error saving customer:', err);
    res.status(500).json({ message: 'Error saving customer data', error: err.message });
  }
});

module.exports = router;
