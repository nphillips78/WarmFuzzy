
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('affcat').del()
    .then(function () {
      // Inserts seed entries
      return knex('affcat').insert([
        { 
          affId: '',
          catId: ''
        }
      ]);
    });
};
