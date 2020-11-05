/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gender', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'denomination'
		},
		uri: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'uri'
		}
	}, {
		tableName: 'gender'
	});
};
