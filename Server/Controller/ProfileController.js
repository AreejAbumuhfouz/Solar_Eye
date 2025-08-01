const User = require('../models/User'); // Import your User model

// Get the authenticated user's profile
const getUserProfile = async (req, res) => {
  try {
    // Use the user ID from the token (attached by the authMiddleware)
    const userId = req.user.userId;

    // Fetch the user from the database, excluding the password
    const user = await User.findById(userId).select('-password');

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user profile data
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update the authenticated user's profile
const updateUserProfile = async (req, res) => {
  const { name, city } = req.body; // Fields to update

  try {
    // Get the user ID from the decoded JWT token
    const userId = req.user.userId;

    // Find the user by their ID and update the fields
    const user = await User.findByIdAndUpdate(
      userId,
      { name, city },
      { new: true, runValidators: true } // `new: true` ensures updated user is returned
    );

    // If the user was not found, return 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the updated user profile
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
