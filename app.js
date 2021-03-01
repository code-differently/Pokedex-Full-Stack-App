const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'pokemon.db'
  });
 
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Pokemon database created!');
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();