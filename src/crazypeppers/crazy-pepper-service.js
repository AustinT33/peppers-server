const CrazyPepperService = {
    getAllCrazyPeppers(knex) {
        return knex.select('*').from('crazypeppers')
    }
}

module.exports = CrazyPepperService