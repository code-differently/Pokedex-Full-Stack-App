module.exports = (sequelize, type) => {
    return sequelize.define('pokemon', {
        id: {
          type: type.INTEGER,
          primaryKey: true
        },
        name: type.STRING,
        image: type.STRING
    })
}

