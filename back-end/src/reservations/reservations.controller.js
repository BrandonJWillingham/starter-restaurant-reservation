/**
 * List handler for reservation resources
 */
const reservations = require("../db/seeds/00-reservations.json")
const service = require("./reservation.service")

async function list(req, res) {
  const data = await service.list()
  res.json({
    data: data,
  });
}

function hasNonNullables(req,res,next){
  const {data:{result}= {}} = req.body
  console.log(result)
  if(
    result.first_name &&
    result.last_name &&
    result.mobile_number &&
    result.people
   ){
    next()
   }
   else{
    next({
      status: "400",
      message: "Missing Non-nullables"
    })
   }
}

async function create(req,res, next){
  const {data = {}} = req.body;
  console.log(data)
  const newReservaiton = await service.create(req.body.data)
  res.status(201).json({newReservaiton})
}

module.exports = {
  list,
  // create: [hasNonNullables,create]
  create,
};
