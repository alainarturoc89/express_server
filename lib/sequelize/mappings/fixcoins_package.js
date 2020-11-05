/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fixcoinsPackage', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		cant: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'cant'
		},
		price: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'price'
		},
		one: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'one'
		}
	}, {
		tableName: 'fixcoins_package'
	});
};
