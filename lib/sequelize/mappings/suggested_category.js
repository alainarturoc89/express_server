/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('suggestedCategory', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		user: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'user'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'denomination'
		},
		type: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'type'
		}
	}, {
		tableName: 'suggested_category'
	});
};
