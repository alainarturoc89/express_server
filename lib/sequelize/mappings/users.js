/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		photo: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'photo'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
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
		token: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'token'
		},
		code: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'code'
		},
		dateRegistry: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date_registry'
		},
		birthDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'birth_date'
		},
		gender: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'gender',
				key: 'id'
			},
			field: 'gender'
		},
		notification: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'notification'
		},
		notificationChat: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'notification_chat'
		},
		codeNumber: {
			type: DataTypes.STRING(4),
			allowNull: true,
			field: 'code_number'
		},
		validateNumber: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'validate_number'
		},
		authenticationDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'authentication_date'
		},
		token_auth: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'token_auth'
		}
	}, {
		tableName: 'users'
	});
};
