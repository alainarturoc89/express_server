/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transactionFixcoin', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '3',
			field: 'status'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		fixcoinsPackage: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'fixcoins_package',
				key: 'id'
			},
			field: 'fixcoins_package'
		},
		dateRegistry: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date_registry'
		},
		dateResponse: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_response'
		},
		transactionId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'transaction_id'
		},
		denominationStatus: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'denomination_status'
		}
	}, {
		tableName: 'transaction_fixcoin'
	});
};
