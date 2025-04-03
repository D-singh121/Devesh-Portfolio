# Developer Portfolio Website

A modern portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript.

## Features

- Modern and responsive design
- Project showcase
- Skills and expertise section
- Contact form
- Blog section
- Dark/Light mode
- Smooth animations

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router

- Backend:
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB
  - Mongoose

## Project Structure

```
portfolio/
├── client/             # Frontend React application
├── server/             # Backend Node.js application
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd client
   npm run dev
   ```

## Contributing

Feel free to submit issues and enhancement requests! 