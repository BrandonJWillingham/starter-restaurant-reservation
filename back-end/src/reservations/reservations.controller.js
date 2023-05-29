/**
 * List handler for reservation resources
 */
const reservations = require("../db/seeds/00-reservations.json")
const service = require("./reservation.service")

async function list(req, res) {
  console.log(req.query.date)
  const data = await service.list(req.query.date)
  res.json({
    data: data,
  });
}
async function read(req,res){
  console.log("called")
  const data = await service.read(req.params.id)
  res.json({
    data: data[0],
  })
}
async function destroy(req,res){
  console.log("called", req.params.id)
  await service.destroy(req.params.id)
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
  console.log("create called")
  const {data = {}} = req.body;
  console.log(data)
  const newReservaiton = await service.create(req.body.data)
  res.status(201).json({newReservaiton})
}

module.exports = {
  list,
  destroy,
  // create: [hasNonNullables,create],
  create,
  read,
};
