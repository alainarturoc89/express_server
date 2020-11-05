/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('services', {
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
		},
		imagen: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'imagen'
		},
		emergency: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'emergency'
		},
		hidden: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'hidden'
		}
	}, {
		tableName: 'services'
	});
};
