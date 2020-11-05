/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertJobs', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		job: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'job'
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'expert_jobs'
	});
};
