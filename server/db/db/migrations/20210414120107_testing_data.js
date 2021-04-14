
exports.up = function(knex) {
  return knex.schema.createTable('testing_data', table => {
    table.increments('id')
    table.string('class')
    table.string('category')
    table.string('indicator_name')
    table.string('series_name')
    table.string('sub_series_name')
    table.date('parameter')
    table.integer('value')
    table.string('units')
    table.date('date_last_updated')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('testing_data')
};
