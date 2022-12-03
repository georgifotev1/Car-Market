const Car = require("../models/Cars");

async function getAll() {
  return Car.find({});
}

async function getById(id) {
  return Car.findById(id);
}

async function getByUserId(userId) {
  return Car.find({ _ownerId: userId });
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
  existing.img = carOffer.img;
  return existing.save();
}

async function deleteById(id) {
  return Car.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  deleteById,
};
