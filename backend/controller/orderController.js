import Order from "../model/orderSchema.js";
import User from "../model/userSchema.js";
import razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
const currency = "inr";
const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      address,
      payment: false,
      paymentMethod: "COD",
      userId,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });
    return res.status(201).json({ message: "Order Placed" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Order not placed" });
  }
};
export const userOrders = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const orders = await Order.find({ userId: userId });

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
};

export const placeOrderRazorpay = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      address,
      payment: false,
      paymentMethod: "online",
      userId,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    const options = {
      amount: newOrder.amount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };
    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json(error);
      }
      return res.status(201).json(order);
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const verifyRazorpay = async (req, res) => {
  try {
    const userId = req.userId;
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === "paid") {
      await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      await User.findByIdAndUpdate(userId, {
        cartData: {},
      });
      return res.status(200).json({ message: "payment successfull" });
    } else {
      return res.status(400).json({ message: "Payment Failed" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Payment failed due to internal server" });
  }
};

// for admin
export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(501).json({ message: "Error getting in all orders" });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status });
    return res.status(201).json({ message: "Order updated successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Order not updated successfully" });
  }
};
