/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cancellationType', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		denomination: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'denomination'
		}
	}, {
		tableName: 'cancellation_type'
	});
};
