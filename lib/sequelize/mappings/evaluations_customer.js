/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('evaluationsCustomer', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		customer: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'customers',
				key: 'id'
			},
			field: 'customer'
		},
		offer: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'offers',
				key: 'id'
			},
			field: 'offer'
		},
		evaluation: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'evaluation'
		},
		commentary: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'commentary'
		},
		cost: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'cost'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'date'
		}
	}, {
		tableName: 'evaluations_customer'
	});
};
