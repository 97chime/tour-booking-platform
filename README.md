# Tour Booking Platform

  A full-stack web application for booking travel tours. Users can browse available tours, create accounts, make bookings, and view their booking history. The platform is built with React (frontend), Node.js + Express (backend), and MongoDB (database), showcasing a complete end-to-end system.

# Features

  - Completed

      User Authentication – Secure sign-up and login system (JWT + bcrypt).
  
      Tour Listing – Display available tour packages from the database.
  
      Booking System – Users can book tours with real-time updates.
  
      My Bookings (Basic) – View a list of user’s past and current bookings.

  - In Progress

      Improved My Bookings view (status, details, pricing).

  - Planned

      Admin Panel – Role-based access for admins.
  
      Add/Edit Tours – Admins can create and update tours.
  
      Manage Bookings – Admins can view and approve/reject bookings.

# Tools used

  * Frontend: React, Tailwind CSS (planned for styling)
  
  * Backend: Node.js, Express.js
  
  * Database: MongoDB (Mongoose ODM)
  
  * Authentication: JWT, bcrypt
  
# Prerequisites
    Node.js (>= 16)
    MongoDB (local or MongoDB Atlas)

# Installation

  # Clone the repository
      git clone https://github.com/97chime/tour-booking-platform.git
  
  # Navigate into backend and install dependencies
      cd backend
      npm install
  
  # Navigate into frontend and install dependencies
      cd ../frontend
      npm install
  
  # Navigate back to the root and start both the server and client
      npm run dev
