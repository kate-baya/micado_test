const express = require('express')

const db = require('../db/dbFunctions')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCovidStats()
  .then(stats => {
    res.json(stats)
  })
})

//find all potential column info

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
    console.log(data)
    data.forEach(d => d.parameter = new Date(d.parameter))
    console.log(data)
    res.json(data)
  })
  .catch(err => console.log(err))
})

//find TOTAL days for specific value/and sub_series
router.get('/totalDays/:sub_series/:lowest/:highest', (req, res) => {
  const lowest = req.params.lowest
  const highest = req.params.highest
  const sub_series = req.params.sub_series
  db.getTotalDays(sub_series, lowest, highest)
  .then(totalDays => {
    res.json(totalDays)
  })
})

//find dates for specifc value and sub_series
router.get('/dates/:sub_series/:lowest/:highest', (req, res) => {
  const lowest = req.params.lowest
  const highest = req.params.highest
  const sub_series = req.params.sub_series
  db.findDates(sub_series, lowest, highest)
  .then(dates => {
    res.json(dates)
  })
  .catch(err => console.log(err))
})

//find dates where value is null for specific subseries
router.get('/null/:sub_series', (req, res) => {
  const sub_series = req.params.sub_series
  db.findNull(sub_series)
  .then(dates => {
    res.json(dates)
  })
  .catch(err => console.log(err))
})

//find min value for specific subseries and dates
router.get('/min/:sub_series/:start/:end', (req, res) => {
  const start = req.params.start
  const end = req.params.end
  const sub_series = req.params.sub_series
  db.findMinValue(sub_series, start, end)
  .then(value => {
    res.json(value)
  })
  .catch(err => console.log(err))
})

router.get('/max/:sub_series/:start/:end', (req, res) => {
  const start = req.params.start
  const end = req.params.end
  const sub_series = req.params.sub_series
  db.findMaxValue(sub_series, start, end)
  .then(value => {
    res.json(value)
  })
  .catch(err => console.log(err))
})

module.exports = router