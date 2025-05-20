const User = require('../model/user');

// Add item to wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });
    if (!user.wishlist.includes(itemId)) {
      user.wishlist.push(itemId);
      await user.save();
    }
    res.status(200).json({ message: "Item added to wishlist.", wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
};

// Remove item from wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });
    const index = user.wishlist.indexOf(itemId);
    if (index !== -1) {
      user.wishlist.splice(index, 1);
      await user.save();
      return res.status(200).json({ message: "Item removed from wishlist.", wishlist: user.wishlist });
    }
    res.status(400).json({ message: "Item not found in the wishlist." });
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get wishlist for a user
exports.getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('wishlist');
    if (!user) return res.status(404).json({ message: "User not found." });
    res.status(200).json({ wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
};
