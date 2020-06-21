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
  getAllPeppers(knex) {
  return knex
    .select('*')
    .from('peppers');
  },
  getById(knex, id) {
    return knex
      .from('peppers')
      .select('*')
      .where('id', id)
      .first()
  },
  postPepper(knex, postPepper) {
    return knex
      .insert(postPepper)
      .into('selected_pepper')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
};

module.exports = PepperService;
