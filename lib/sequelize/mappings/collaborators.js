/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('collaborators', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'email'
		},
		identificationType: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'identification_type',
				key: 'id'
			},
			field: 'identification_type'
		},
		number: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'number'
		},
		phone: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'phone'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		photo: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'photo'
		}
	}, {
		tableName: 'collaborators'
	});
};
