
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cat').del()
    .then(function () {
      // Inserts seed entries
      return knex('cat').insert([
        { cat: '' }
      ]);
    });
};
