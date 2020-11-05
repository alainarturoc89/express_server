/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contenidos', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		clave: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'clave'
		},
		valor: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'valor'
		},
		fecha: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'fecha'
		}
	}, {
		tableName: 'contenidos'
	});
};
