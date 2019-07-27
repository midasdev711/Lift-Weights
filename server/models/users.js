// model for users in database

// reference: https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
// types: http://docs.sequelizejs.com/manual/data-types.html
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            defaultValue: DataTypes.INTEGER,
            allowNull: false
        },
        googleId: {
            type: DataTypes.STRING,
            required: false
        },
        username: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        }
    });
    return Users;
};