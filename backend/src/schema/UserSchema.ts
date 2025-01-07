import { IUser } from "../types/userType";
import { Schema } from "mongoose";

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true, // Enforce a minimum password length
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows optional Google ID without conflicting with unique index
    },
    isGoogleUser: {
      type: Boolean,
      required: true,
      default: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    googleAccessToken: {
      type: String,
      required: false,
    },
    accountStatus: {
      type: String,
      enum: ["active", "suspended"], // Restricts the field to these two values
      default: "active",
      required: false,
    },
    favorites: [
      {
        productId: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default UserSchema;