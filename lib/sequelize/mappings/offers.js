/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('offers', {
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
		request: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'requests',
				key: 'id'
			},
			field: 'request'
		},
		cost: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'cost'
		},
		observations: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'observations'
		},
		status: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'progress',
			field: 'status'
		},
		collaborator: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'collaborators',
				key: 'id'
			},
			field: 'collaborator'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		},
		startDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'start_date'
		},
		hour: {
			type: DataTypes.TIME,
			allowNull: true,
			field: 'hour'
		},
		responseTime: {
			type: DataTypes.TIME,
			allowNull: true,
			field: 'response_time'
		},
		completedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'completed_date'
		}
	}, {
		tableName: 'offers'
	});
};
