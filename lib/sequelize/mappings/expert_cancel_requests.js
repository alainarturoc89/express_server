/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertCancelRequests', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		request: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'requests',
				key: 'id'
			},
			field: 'request'
		},
		dateCanceled: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date_canceled'
		}
	}, {
		tableName: 'expert_cancel_requests'
	});
};
