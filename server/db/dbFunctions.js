const environment = process.env.NODE_ENV || 'development'; 
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration); 

// console.log(database.select('*').from('test'))
// console.log(database.select('*').from('covid_19_new_zealand'))

//find all subSeries
function getSubSeries(db = database) {
  return db('covid_19_new_zealand')
  .distinct()
  .select('sub_series_name')
}

//find total avg value for specifc dates/and sub_series
function getTotalValue(sub_series, start, end, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('parameter', [start, end])
  .avg('value')
}

//find value for specific dates/and sub_series
function findValue(sub_series, start, end, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('parameter', [start, end])
  .select('sub_series_name','parameter', 'value')
}

//find dates for specifc value and sub_series
function findDates(sub_series, lowest, highest, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('value', [lowest, highest])
  .select()
}

//find dates where value is null for specific subseries
function findNull(sub_series, db = database) {
  return db('covid_19_new_zealand')
  .where({'sub_series_name': sub_series, 'value': '0'})
  .select()
}

//find total days for specifc value/and sub_series
function getTotalDays(sub_series, lowest, highest, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('value', [lowest, highest])
  .count('parameter')
}

//find min value for specific subseries and dates
function findMinValue(sub_series, start, end, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('parameter', [start, end])
  .min('value')
}

//find max value for specific subseries and dates
function findMaxValue(sub_series, start, end, db = database) {
  return db('covid_19_new_zealand')
  .where('sub_series_name', sub_series)
  .whereBetween('parameter', [start, end])
  .max('value')
}

module.exports = {
  getTotalValue,
  findValue,
  findDates,
  findNull,
  getTotalDays,
  findMinValue,
  findMaxValue,
  getSubSeries
}