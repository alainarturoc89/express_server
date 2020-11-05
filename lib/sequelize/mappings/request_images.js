/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('requestImages', {
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
		image: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'image'
		}
	}, {
		tableName: 'request_images'
	});
};
