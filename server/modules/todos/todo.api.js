const router = require("express").Router();
//const { model } = require("mongoose");
const TodoController = require("./todo.controller");

//create
router.post("/", async (req, res, next) => {
  try {
    const result = await TodoController.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//list
router.get("/", async (req, res, next) => {
  try {
    const result = await TodoController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//getById
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//updateById
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.updateById(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//updateStatus
router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.updateStatus(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//removeById
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.removeById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
