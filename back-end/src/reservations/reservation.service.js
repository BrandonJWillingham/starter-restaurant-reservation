const knex = require("../db/connection")

function create(newReservaiton){
    return knex("reservations").insert(newReservaiton).returning("*")
}
function list(){
    return knex("reservations").select("*")
}

module.exports = {
    create,
    list,
}