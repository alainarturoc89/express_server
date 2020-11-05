/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customers', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		user: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'user'
		},
		phone: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'phone'
		},
		avatar: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'avatar'
		},
		active: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'active'
		}
	}, {
		tableName: 'customers'
	});
};
