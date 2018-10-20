exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('aff')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('aff').insert([
        { text: '' }
      ]);
    });
};
