/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categories', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		service: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'services',
				key: 'id'
			},
			field: 'service'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'denomination'
		},
		cost: {
			type: DataTypes.FLOAT,
			allowNull: false,
			field: 'cost'
		},
		emergency: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'emergency'
		}
	}, {
		tableName: 'categories'
	});
};
