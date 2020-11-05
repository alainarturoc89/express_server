/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('experiencia', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'denomination'
		}
	}, {
		tableName: 'experiencia'
	});
};
