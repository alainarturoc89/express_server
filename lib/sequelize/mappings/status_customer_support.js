/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('statusCustomerSupport', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		denomination: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'denomination'
		},
		uri: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'uri'
		}
	}, {
		tableName: 'status_customer_support'
	});
};
