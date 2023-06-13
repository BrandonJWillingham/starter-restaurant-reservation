const {response} = require("express");
const service = require("./tables.service")

async function create(req,res){
    const response = await service.create(req.body.data);
    res.status(201).json({response})
}

async function list(req,res){
    const data = await service.list(req.query.date)
    res.json({
    data: data,
  });
}

async function update(req,res){
    const table = req.params.table_id
    const reservation = req.body.data
    await service.update(table,reservation)
    res.status(400)
}


module.exports = {
    create,
    list,
    update,
}