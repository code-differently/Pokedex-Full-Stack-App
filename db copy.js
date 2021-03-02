const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'pokedex.db'
  });
 
  mapping.init({
    mappingid: Sequelize.STRING,
    pokeid: Sequelize.INTEGER,
    typeid: Sequelize.STRING,
  }, { sequelize });
  
  // pokemon.init({
  //   title: Sequelize.STRING,
  // }, { sequelize });

  // types.init({
  //   title: Sequelize.STRING,
  // }, { sequelize });

  (async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: true });
      console.log('Pokedex database created...');
      console.log('mapping, pokemon, and types tables created...')
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();