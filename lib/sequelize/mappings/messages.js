/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('messages', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		de: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'de'
		},
		para: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'para'
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
		message: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'message'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		},
		show: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'show'
		}
	}, {
		tableName: 'messages'
	});
};
