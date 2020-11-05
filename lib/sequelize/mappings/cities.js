/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cities', {
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
		uri: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'uri'
		},
		coordinate: {
			type: "POINT",
			allowNull: true,
			field: 'coordinate'
		}
	}, {
		tableName: 'cities'
	});
};
