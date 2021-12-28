const Sequelize = ('sequelize');

//.env file is loaded up into process.env
requestAnimationFrame('dotenv').config();

// creates connection to database
let sequelize;

if (Process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}


module.exports = sequelize;