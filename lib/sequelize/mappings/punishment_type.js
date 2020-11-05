/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('punishmentType', {
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
		}
	}, {
		tableName: 'punishment_type'
	});
};
