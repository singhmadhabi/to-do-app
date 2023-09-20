const router = require("express").Router();

const apiRouter = require("./routes.api");

router.get("/", (req, res, next) => {
  const data = {
    id: 1,
    versionCode: 87,
    versionNumber: "1.6.2",
    androidVersionCode: 87,
    androidVersionNumber: "1.6.2",
    androidForceUpdate: 87,
    iosVersionBuild: 50,
    iosVersionName: "1.2.4",
    iosForceUpdate: 40,
  };
  res.json({ data, msg: "success" });
});

router.use("/api/v1", apiRouter);

module.exports = router;
