const Sequelize = require('sequelize');
const User = require('./user');
const config = require('../config/config')['test'];
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
)

describe('User 모델', () => {
    test('static initiate 메소드 호출', () => {
        expect(User.initiate(sequelize)).toBe(undefined);
    });

    test('static associate 메소드 호출', () => {
        const db = {
            User: {
                basMany: jest.fn(),
                belongsToMany: jest.fn(),
            },
            Post: {}
        }
        User.associate(db);
        expect(db.User.hasMany).toHaveBeenCalled(db.Post);
        expect(db.User.belongsToMany).toHaveBeenCalledTimes(2);
    })
})