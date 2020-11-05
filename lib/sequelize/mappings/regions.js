/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('regions', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		city: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cities',
				key: 'id'
			},
			field: 'city'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		coordinates: {
			type: "MULTIPOINT",
			allowNull: true,
			field: 'coordinates'
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'regions'
	});
};
