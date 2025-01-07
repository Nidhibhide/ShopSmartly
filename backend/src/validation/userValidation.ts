import Joi from "joi";

const userValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
    "string.empty": "Name cannot be empty.",
  }),

  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),

  username: Joi.string().required().messages({
    "any.required": "Username is required.",
    "string.empty": "Username cannot be empty.",
  }),

  password: Joi.string().min(6).when("isGoogleUser", {
    is: false,
    then: Joi.required(),
    otherwise: Joi.optional(),
  }).messages({
    "string.min": "Password must be at least 6 characters long.",
    "any.required": "Password is required for non-Google users.",
  }),

  googleId: Joi.string().optional().messages({
    "string.empty": "Google ID cannot be empty.",
  }),

  isGoogleUser: Joi.boolean().required().messages({
    "any.required": "isGoogleUser is required.",
  }),

  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/) // Example for validating a 10-digit phone number
    .required()
    .messages({
      "any.required": "Phone number is required.",
      "string.empty": "Phone number cannot be empty.",
      "string.pattern.base": "Phone number must be a valid 10-digit number.",
    }),

  googleAccessToken: Joi.string().optional().messages({
    "string.empty": "Google access token cannot be empty.",
  }),

  accountStatus: Joi.string()
    .valid("active", "suspended")
    .default("active")
    .messages({
      "any.only": "Account status must be either 'active' or 'suspended'.",
    }),

  favorites: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().required().messages({
          "any.required": "Product ID is required.",
          "string.empty": "Product ID cannot be empty.",
        }),
      })
    )
    .optional(),
});

export default userValidationSchema;
