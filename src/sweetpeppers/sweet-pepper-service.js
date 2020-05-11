const SweetPepperService = {
    getAllSweetPeppers(knex) {
        return knex.select('*').from('sweetpeppers')
    }
}

module.exports = SweetPepperService