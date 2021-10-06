module.exports = (app) => {
  const tutorials = require("../controllers/controller.js");
  var router = require("express").Router();

  router.post("/", tutorials.create);
  router.get("/", tutorials.findAll);
  router.get("/:id", tutorials.findOne);
  router.put("/", tutorials.update);
  router.delete("/", tutorials.delete);
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
