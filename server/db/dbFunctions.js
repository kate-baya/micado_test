const environment = process.env.NODE_ENV || 'development'; 
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration); 

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


module.exports = {
  getTotalValue,
  findValue,
  getSubSeries
}