/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fixcoinRedimido', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		valor: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '3',
			field: 'valor'
		}
	}, {
		tableName: 'fixcoin_redimido'
	});
};
