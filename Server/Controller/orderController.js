
const Order = require('../models/Order');
const Service = require('../models/Service');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    // Use the user ID from the token (attached by the authMiddleware)
    const userId = req.user.userId;

    // Get the service ID and total price from the request body
    const { serviceId, totalPrice } = req.body;

    // Validate required fields
    if (!serviceId || !totalPrice) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Verify the service exists
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    // Create the order using the user ID from the middleware
    const order = new Order({
      userId, // User ID from the middleware
      serviceId,
      totalPrice,
    });

    // Activate the package based on service frequency (assuming you have this method in your order model)
    await order.activatePackage();

    // Save the order
    await order.save();

    // Return the order details
    return res.status(201).json({
      message: 'Order created successfully.',
      order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating order.', error: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    // Use the user ID from the token (attached by the authMiddleware)
    const userId = req.user.userId;
    console.log("Fetching orders for user ID:", userId);

    // Retrieve the orders for the specific user
    const orders = await Order.find({ userId })
      .populate('serviceId', 'packageName description duration icon _id serviceFrequency') // Populate service details
      .exec();

    // If no orders are found, return a 404 response
    if (!orders.length) {
      return res.status(404).json({ message: 'No orders found for this user.' });
    }

    // Return the orders for the user
    res.status(200).json({
      message: 'User orders retrieved successfully.',
      orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user orders.', error: error.message });
  }
};




// Get all orders with filtering, searching, and status update
exports.getAllOrders = async (req, res) => {
  try {
    // Get query parameters for filtering and searching
    const { status, search, page = 1, limit = 10 } = req.query;
    
    // Create a filter object based on provided query parameters
    let filter = {};
    
    // Add filter for status if provided
    if (status) {
      filter['status'] = status;
    }

    // Add filter for search if provided (searches user fields and service package name)
    if (search) {
      const searchRegex = new RegExp(search, 'i'); // Case-insensitive search
      filter = {
        ...filter,
        $or: [
          { 'userId.name': { $regex: searchRegex } },
          { 'userId.email': { $regex: searchRegex } },
          { 'serviceId.packageName': { $regex: searchRegex } },
        ]
      };
    }

    // Pagination setup
    const skip = (page - 1) * limit;
    
    // Retrieve the orders with pagination and filters applied
    const orders = await Order.find(filter)
      .populate('userId', 'name email') // Populate user details
      .populate('serviceId', 'packageName description duration icon serviceFrequency') // Populate service details
      .skip(skip) // Apply pagination skip
      .limit(limit) // Apply pagination limit

    // Get total count for pagination
    const totalOrders = await Order.countDocuments(filter);

    // Return orders along with pagination metadata
    res.status(200).json({
      message: 'Orders retrieved successfully.',
      orders,
      pagination: {
        totalOrders,
        totalPages: Math.ceil(totalOrders / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ message: 'Error retrieving orders.', error: error.message });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body; // Expecting orderId and new status in the request body

    // Validate that the status is a valid option
    const validStatuses = ['Pending', 'Active', 'Expired', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value.' });
    }

    // Update the status of the order
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true } // Return the updated document
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // Return the updated order details
    res.status(200).json({
      message: 'Order status updated successfully.',
      order,
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status.', error: error.message });
  }
};
