/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('punishments', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		startDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'start_date'
		},
		endDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'end_date'
		},
		punishmentType: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'punishment_type',
				key: 'id'
			},
			field: 'punishment_type'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		}
	}, {
		tableName: 'punishments'
	});
};
