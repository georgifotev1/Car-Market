const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
    minlength: [2, "Make must be at least 2 characters long"],
  },
  model: {
    type: String,
    required: true,
    minlength: [2, "Model must be at least 2 characters long"],
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value >= 1950 && value <= 2022,
      message: "Year must be between 1950 and 2022",
    },
  },
  mileage: {
    type: Number,
    required: true,
    min: [0, "Mileage must be a positive number"],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Description must be at least 10 characters long"],
  },
  fuelType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  img: { type: String, required: [true, "Image URL is required"] },
  _ownerId: { type: ObjectId, ref: "User", required: true },
});

const Car = model("Car", carSchema);

module.exports = Car;
