const router = require("express").Router();
const Controller = require("./subtask.controller");

router.post("/", async (req, res, next) => {
  try {
    const { title, todo } = req.body;
    if (!title || !todo) throw new Error("Title or Todo is missing...");
    const result = await Controller.create({ title, todo });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Controller.updateStatus(id, { status });
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Controller.removeById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
