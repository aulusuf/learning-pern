const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  const body = {
    first_name: req.body.first_name,
    last_name: req.body.last_name ? req.body.last_name : null,
    email: req.body.email ? req.body.email : null,
    gender: req.body.gender ? req.body.gender : null,
  };

  Tutorial.create(body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some error occured while creating teacher",
      });
    });
};

exports.findAll = (req, res) => {
  const first_name = req.query.first_name;
  var condition = first_name
    ? { first_name: { [Op.iLike]: `%${first_name}` } }
    : null;

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occured while retrieving teacher data",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPK(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find teacher with id: ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occured while retrieving teacher data",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req, body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Teacher's data was updated successfull",
        });
      } else {
        res.send({
          message: `Cannot update teacher's data in id ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: `Error updating teacher's data with id ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Teacher's data has been deleted",
        });
      } else {
        res.send({
          message: `Cannot delete teacher's data with id ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: `Cannot delete teacher's data with id ${id}`,
      });
    });
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Teachers were deleted successfully`,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while removing all teachers",
      });
    });
};
