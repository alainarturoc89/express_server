module.exports = function (sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'password'
		},
		created: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'created'
		},
		token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'token'
		}
	}, {
		tableName: 'users'
	});
};
