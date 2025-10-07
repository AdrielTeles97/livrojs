const knex = require("knex")
const config = require("../knexfile.js")

// Garanta que useNullAsDefault está presente
const configWithDefault = {
    ...config.development,
    useNullAsDefault: true
}

const dbKenx = knex(configWithDefault)
module.exports = dbKenx