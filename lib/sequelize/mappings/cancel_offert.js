/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cancelOffert', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		texto: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'texto'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cancellation_type',
				key: 'id'
			},
			field: 'type'
		},
		offert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'offers',
				key: 'id'
			},
			field: 'offert'
		}
	}, {
		tableName: 'cancel_offert'
	});
};
