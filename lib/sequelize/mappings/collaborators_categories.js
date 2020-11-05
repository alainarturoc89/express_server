/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('collaboratorsCategories', {
		collaborator: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'collaborators',
				key: 'id'
			},
			field: 'collaborator'
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
		tableName: 'collaborators_categories'
	});
};
