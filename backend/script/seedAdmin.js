import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js"; // adjust path

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const seedAdmin = async () => {
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
        console.error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables");
        process.exit(1);
    }

    const adminEmail = process.env.ADMIN_EMAIL || "";;
    const adminPassword = process.env.ADMIN_PASSWORD || "";

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
        console.log("Admin already exists");
        return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const admin = new User({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
    });

    await admin.save();
        console.log("Admin user created");
        mongoose.connection.close();
    };

seedAdmin();