const tables = require("./00-tables.json")

exports.seed = function (knex) {
  return knex("table").insert(tables)
};