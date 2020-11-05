/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contenidosOld', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		terminos: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'terminos'
		},
		politicas: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'politicas'
		},
		company: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'company'
		}
	}, {
		tableName: 'contenidos_old'
	});
};
