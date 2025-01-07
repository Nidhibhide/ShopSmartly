import  { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    username: string;
    password?: string; // Optional for users signing in with Google
    googleId?: string; // To store Google OAuth ID
    isGoogleUser: boolean; // Indicates if the user signed up using Google
    phoneNumber?: string; // Standardized casing for consistency
    googleAccessToken?: string; // For Google Authentication
    accountStatus: "active" | "suspended"; // Account status, default provided in schema
    favorites: { productId: string }[]; // To store user's favorite products
    createdAt: Date;
    updatedAt: Date;
  }
