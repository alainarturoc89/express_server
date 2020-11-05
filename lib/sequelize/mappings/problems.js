/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('problems', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		user: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'user'
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
		problemType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'problem_type',
				key: 'id'
			},
			field: 'problem_type'
		},
		problem: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'problem'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		}
	}, {
		tableName: 'problems'
	});
};
