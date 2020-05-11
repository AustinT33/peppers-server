const HybridPepperService = {
    getAllHybridPeppers(knex) {
        return knex.select('*').from('hybridpeppers')
    }
}

module.exports = HybridPepperService