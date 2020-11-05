/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plans', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			field: 'denomination'
		},
		fitcoints: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'fitcoints'
		},
		uri: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			field: 'uri'
		},
		daysDuration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '30',
			field: 'days_duration'
		},
		price: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'price'
		}
	}, {
		tableName: 'plans'
	});
};
