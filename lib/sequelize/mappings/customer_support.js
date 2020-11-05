/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customerSupport', {
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
		typeCustomerSupport: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'type_customer_support',
				key: 'id'
			},
			field: 'type_customer_support'
		},
		dateRegistry: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date_registry'
		},
		status: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '1',
			primaryKey: true,
			references: {
				model: 'status_customer_support',
				key: 'id'
			},
			field: 'status'
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'description'
		},
		hide: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'hide'
		}
	}, {
		tableName: 'customer_support'
	});
};
