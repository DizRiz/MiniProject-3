"use strict";
const sequelize = require("sequelize");
var Models = require("../models");

const getPost = (res) => {
  Models.Post.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createPost = (data, res) => {
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({
          result: 200,
          data:data,
      });
    })
    .catch((err) => {
      throw err;
    });
};


module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
