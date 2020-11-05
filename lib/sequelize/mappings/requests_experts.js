/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('requestsExperts', {
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
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		}
	}, {
		tableName: 'requests_experts'
	});
};
