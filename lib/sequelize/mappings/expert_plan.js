/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertPlan', {
		id: {
			type: DataTypes.BIGINT,
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
		plan: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'plans',
				key: 'id'
			},
			field: 'plan'
		},
		startDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'start_date'
		},
		endDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'end_date'
		},
		status: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'active',
			field: 'status'
		},
		transaction: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'transaction_plan',
				key: 'id'
			},
			field: 'transaction'
		}
	}, {
		tableName: 'expert_plan'
	});
};
