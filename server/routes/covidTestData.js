const express = require('express')

const db = require('../db/dbFunctions')

const router = express.Router()

//find all subSeries
router.get('/subSeries', (req, res) => {
  db.getSubSeries()
  .then(subSeries => res.json(subSeries))
})

//find TOTAL value for specific dates/and sub_series
router.get('/total/:sub_series/:start/:end', (req, res) => {
  const start = req.params.start
  const end = req.params.end
  const sub_series = req.params.sub_series
  db.getTotalValue(sub_series, start, end)
  .then(total => {
    res.json(total)
  })
})

//find value for specific dates/and sub_series - array
router.get('/:sub_series/:start/:end', (req, res) => {
  const start = req.params.start
  const end = req.params.end
  const sub_series = req.params.sub_series
  db.findValue(sub_series, start, end)
  .then(data => {
    data.forEach(d => d.parameter = new Date(d.parameter))
    res.json(data)
  })
  .catch(err => console.log(err))
})


module.exports = router