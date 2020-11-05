/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('benefitsPlans', {
		benefit: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'benefits',
				key: 'id'
			},
			field: 'benefit'
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
		}
	}, {
		tableName: 'benefits_plans'
	});
};
