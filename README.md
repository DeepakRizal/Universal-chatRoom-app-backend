# Universal-chatRoom-app-backend
```markdown
# Universal-chatRoom-app - Backend

## Description

This is the backend part of a real-time chat application built with Node.js and Express. It provides APIs for user authentication, message handling, and real-time communication via Socket.io.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Additional Information](#additional-information)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Socket.io

## Project Structure
backend/
├── controllers/
│ ├── authController.js
│ ├── chatController.js
├── models/
│ ├── User.js
│ ├── Message.js
├── routes/
│ ├── authRoutes.js
│ ├── chatRoutes.js
├── middlewares/
│ ├── authMiddleware.js
├── app.js
├── server.js
├── config/
│ ├── db.js
├── package.json

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DeepakRizal/Universal-chatRoom-app-backend.git
   cd Universal-chatRoom-app-backend

2.Install dependences
     npm install
3.Set up environment variables:
     create a .env file in the backend directory and add the following:
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
4.Start the backend server
     npm start

