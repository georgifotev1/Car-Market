const dataController = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../services/carService");
const { parseError } = require("../util/parser");
const { findOwnerByID } = require("../services/userService");

dataController.get("/", async (req, res) => {
  const cars = await getAll();
  res.json(cars);
});

dataController.post("/create", async (req, res) => {
  try {
    const car = await create(req.body);
    res.json(car);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

dataController.get("/:id", async (req, res, next) => {
  const car = await getById(req.params.id);
  res.json(car);
});

dataController.get("/owner/:id", async (req, res, next) => {
  const owner = await findOwnerByID(req.params.id);
  res.json(owner[0]);
});

dataController.put("/:id", async (req, res, next) => {
  try {
    const result = await update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

dataController.delete("/:id", async (req, res) => {
  try {
    await deleteById(req.params.id);
    res.status(204).end();
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

module.exports = dataController;
