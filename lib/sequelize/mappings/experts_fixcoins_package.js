/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertsFixcoinsPackage', {
		fixcoinsPackage: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'fixcoins_package',
				key: 'id'
			},
			field: 'fixcoins_package'
		},
		expert: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'experts',
				key: 'id'
			},
			field: 'expert'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		},
		transactionFixcoin: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'transaction_fixcoin',
				key: 'id'
			},
			field: 'transaction_fixcoin'
		}
	}, {
		tableName: 'experts_fixcoins_package'
	});
};
