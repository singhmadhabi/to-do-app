const router = require("express").Router();
//const { model } = require("mongoose");
const SubtaskController = require("./subtask.controller");

//create
router.post("/", async (req, res, next) => {
  try {
    const result = await SubtaskController.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//list
router.get("/", async (req, res, next) => {
  try {
    const result = await SubtaskController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//getById
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//updateById
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.updateById(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//updateStatus
router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.updateStatus(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

//removeById
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.removeById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
