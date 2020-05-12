const PepperService = {
  getAllCrazyPeppers(knex) {
    return knex
      .select('*')
      .where('category', 'crazy')
      .from('peppers');
  },
  getAllSweetPeppers(knex) {
    return knex
      .select('*')
      .where('category', 'sweet')
      .from('peppers');
  },
  getAllHotPeppers(knex) {
    return knex
      .select('*')
      .where('category', 'hot')
      .from('peppers');
  },
  getAllHybridPeppers(knex) {
    return knex
      .select('*')
      .where('category', 'hybrid')
      .from('peppers');
  },
};

module.exports = PepperService;
