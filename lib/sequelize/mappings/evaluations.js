/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('evaluations', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
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
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		evaluation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'evaluation'
		},
		commentary: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'commentary'
		},
		cost: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'cost'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		}
	}, {
		tableName: 'evaluations'
	});
};
