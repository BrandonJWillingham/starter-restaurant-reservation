const knex = require("../db/connection")

function create(newReservaiton){
    return knex("reservations").insert(newReservaiton).returning("*")
}
function list(date){
    return knex("reservations").select("*").where("reservation_date",date)
}
function destroy(id){
   return knex("reservations").where("reservation_id",id).del();
}
function read(id){
    return knex("reservations").where("reservation_id", id);
}
function listAll(){
    return knex("reservations")
}

module.exports = {
    create,
    list,
    destroy,
    read,
    listAll,
}