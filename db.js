const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'pokedex.db'
  });


class pokemon extends Sequelize.Model {}
pokemon.init({
  pokeid: Sequelize.INTEGER,
  name: Sequelize.STRING,
  img: Sequelize.STRING,
  timestamps: false,
}, { sequelize });


// class types extends Sequelize.Model {}
// types.init({
//   typeid: Sequelize.INTEGER,
//   typeName: Sequelize.STRING,
//   timestamps: false,
// }, { sequelize });


// class mapping extends Sequelize.Model {}
// mapping.init({
//   mappingid: Sequelize.INTEGER,
//   pokied: Sequelize.INTEGER,
//   typeid: Sequelize.STRING,
//   timestamps: false,
// }, { sequelize });

// mapping.belongsTo(pokeid, { foreignKey: 'pokeid'});
// mapping.belongsTo(typeid, { foreignKey: 'typesid'});


(async () => {
  // await sequelize.sync({ force: false });
  
  try {
    
    await sequelize.authenticate();   
    console.log('Connection to the database successful!');
    const pokemon = await pokemon.create({
      pokeid: '25',
      name: 'Pikachu',
      img: "NULL"
    });

    // const types = await types.create({
    //   typeid: "1",
    //   typeName: 'electric'
    // });

    // const mapping = await mapping.create({
    //   mappingid: "",
    //   pokeid: '25',
    //   typeid: "1"
    // });
    
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();