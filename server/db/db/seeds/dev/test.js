
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {id: 1, message: 'rowValue1'},
        {id: 2, message: 'rowValue2'},
        {id: 3, message: 'rowValue3'}
      ]);
    });
};
