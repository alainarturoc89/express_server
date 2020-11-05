/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cancelRequest', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		requestsId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'requests',
				key: 'id'
			},
			field: 'requests_id'
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
		}
	}, {
		tableName: 'cancel_request'
	});
};
