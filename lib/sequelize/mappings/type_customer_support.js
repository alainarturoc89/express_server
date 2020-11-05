/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('typeCustomerSupport', {
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
		}
	}, {
		tableName: 'type_customer_support'
	});
};
