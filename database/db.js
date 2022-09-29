import { Sequelize } from 'sequelize';

const db = new Sequelize('db_mern', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});

export default db;
