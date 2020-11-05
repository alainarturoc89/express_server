/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('responseCustomerSupport', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		response: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'response'
		},
		customerSupport: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'customer_support',
				key: 'id'
			},
			field: 'customer_support'
		},
		dateRegistry: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date_registry'
		}
	}, {
		tableName: 'response_customer_support'
	});
};
