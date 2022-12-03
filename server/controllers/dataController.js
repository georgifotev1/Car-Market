const dataController = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
  getByUserId,
} = require("../services/carService");
const { parseError } = require("../util/parser");
const { hasUser } = require("../middlewares/guards");

dataController.get("/", async (req, res) => {
  let cars = [];
  if (req.query.where) {
    const userId = JSON.parse(req.query.where.split("=")[1]);
    cars = await getByUserId(userId);
  } else {
    cars = await getAll();
  }
  res.json(cars);
});

dataController.post("/", hasUser(), async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const car = await create(data);
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

dataController.put("/:id", hasUser(), async (req, res, next) => {
  const car = await getById(req.params.id);
  if (req.user._id != car._ownerId) {
    return res.status(403).json({ message: "You cannot modify this record" });
  }

  try {
    const result = await update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

dataController.delete("/:id", hasUser(), async (req, res) => {
  const car = await getById(req.params.id);
  if (req.user._id != car._ownerId) {
    return res.status(403).json({ message: "You cannot modify this record" });
  }

  try {
    await deleteById(req.params.id);
    res.status(204).end();
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});