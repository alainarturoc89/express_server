/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('requests', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		customer: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'customers',
				key: 'id'
			},
			field: 'customer'
		},
		category: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'categories',
				key: 'id'
			},
			field: 'category'
		},
		region: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'regions',
				key: 'id'
			},
			field: 'region'
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'description'
		},
		registryDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'registry_date'
		},
		status: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'progress',
			field: 'status'
		},
		emergency: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'emergency'
		},
		address: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'address'
		},
		cancellationType: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cancellation_type',
				key: 'id'
			},
			field: 'cancellation_type'
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
		completedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'completed_date'
		}
	}, {
		tableName: 'requests'
	});
};
