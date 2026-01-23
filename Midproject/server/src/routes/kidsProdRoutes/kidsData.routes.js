const express = require('express')
const { getAllkids, getAllkidsbyid } = require('./kidsData.controller')
const kidsRoutes = express.Router()

kidsRoutes.get('/', getAllkids)
kidsRoutes.get('/:id', getAllkidsbyid)

module.exports = kidsRoutes