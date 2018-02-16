exports.up = function (knex) {
    return createUsersTable(knex)
        .then(createAffTable)
        .then(createCatTable)
        .catch(error => {
            console.log(error);
            throw error;
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('cat')
        .then(function () {
            console.log('dropping Aff');
            return knex.schema.dropTableIfExists('aff');
        })
        .then(function () {
            console.log('dropping users');
            return knex.schema.dropTableIfExists('users');
        })
        .catch(error => console.log(error));
};

function createUsersTable(knex) {
    console.log('users table dunzo');
    return new Promise((resolve, reject) => {
        knex.schema
            .createTable('users', function (tbl) {
                tbl.increments();
                tbl.string('name', 128).notNullable().unique('name');
                tbl.string('username', 128).notNullable.unique('username');
                tbl.timestamp('createdAt').dafaultTo(knex.fn.now());

                console.log('created users table');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createAffTable(knex) {
    console.log('aff table represent');
    return new Promise((resolve, reject) => {
        knex.schema
            .createTable('aff', function (tbl) {
                tbl.increments();
                tbl.text('aff').notNullable();
                tbl
                    .references('id')
                    .inTable('cat');
                tbl.timestamp('createdAt').defaultTo(knex.fn.now());

                console.log('created aff table');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createCatTable(knex) {
    console.log('cat table in the house');
    return new Promise((resolve, reject) => {
        knex.schema
            .createTable('cat', function (tbl) {
                tbl.increments();
                tbl.string('cat', 128).notNullable;
                tbl.timestamp('createdAt').defaultTo(knex.fn.now());

                console.log('created cat table');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createAffCatTable(knex) {
    console.log('affcat up')

    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('affcat', function (tbl) {
                tbl.increments();
                tbl
                    .notNullable()
                    .references('id')
                    .inTable('aff');
                tbl
                    .notNullable()
                    .references('id')
                    .inTable('cat');

                console.log('affcat table created');
                resolve(knex);
            })
            .catch(error => console.log(error));
    });
}