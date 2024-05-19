import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

export const postMessage = async (req, res) => {
  const { name, content } = req.body;
  const message = new Message({ name, content });
  await message.save();

  res.status(201).json(message);
};

export const fetchMessages = async (req, res) => {
  const messages = await Message.find().sort({ timestamp: -1 }).limit(50);
  res.json(messages);
};

export const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;

    const userId = req.userId;

    const message = await Message.findById(messageId);

    const user = await User.findById(userId);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    if (message.name !== user.name) {
      return res
        .status(403)
        .json({ message: "You can only delete your own messages" });
    }

    await Message.deleteOne({ _id: messageId });
    res.status(200).json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
