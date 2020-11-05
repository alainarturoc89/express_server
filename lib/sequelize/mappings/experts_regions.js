/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertsRegions', {
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
		region: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'regions',
				key: 'id'
			},
			field: 'region'
		}
	}, {
		tableName: 'experts_regions'
	});
};
