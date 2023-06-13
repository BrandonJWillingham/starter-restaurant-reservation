const knex = require("../db/connection")

function create(table){
    return knex("table").insert(table).returning("*")
}
function list(){
    return knex("table").select("*")
}
function update(table,reservation){
    return knex("table").where("table_id", table).update({reservation_id: reservation})
}
module.exports = {
    create,
    list,
    update,
}