/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertsCategories', {
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
		category: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'categories',
				key: 'id'
			},
			field: 'category'
		}
	}, {
		tableName: 'experts_categories'
	});
};
