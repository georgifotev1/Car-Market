const Car = require("../models/Car");

async function getAll() {
  return Car.find({});
}

async function getById(id) {
  return Car.findById(id);
}

async function create(carOffer) {
  return Car.create(carOffer);
}

async function update(id, carOffer) {
  const existing = await Car.findById(id);

  existing.make = carOffer.make;
  existing.model = carOffer.model;
  existing.year = carOffer.year;
  existing.mileage = carOffer.mileage;
  existing.description = carOffer.description;
  existing.price = carOffer.price;
  existing.phoneNumber = carOffer.phoneNumber;
  existing.img = carOffer.img;
  return existing.save();
}

async function deleteById(id) {
  return Car.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
