const HotPepperService = {
    getAllHotPeppers(knex) {
        return knex.select('*').from('hotpeppers')
    }
}

module.exports = HotPepperService