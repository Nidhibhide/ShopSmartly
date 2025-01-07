import { Request, Response, NextFunction } from "express";
import userValidationSchema from "../../validation/userValidation";

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Validation Error",
      details: error.details.map((detail) => detail.message), // Collect detailed error messages
    });
  }

  next(); // Proceed to the next middleware or controller if validation passes
};

export default validateUser;
