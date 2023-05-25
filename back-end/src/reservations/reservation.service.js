const knex = require("../db/connection")

function create(newReservaiton){
    return knex("reservations").insert(newReservaiton).returning("*")
}
function list(){
    return knex("reservations").select("*")
}
function destroy(id){
   return knex("reservations").where("reservation_id",id).del();
}
function read(id){
    return knex("reservations").where("reservation_id", id);
}

module.exports = {
    create,
    list,
    destroy,
    read,
}