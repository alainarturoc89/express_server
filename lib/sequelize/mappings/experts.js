/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('experts', {
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
		identificationType: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'identification_type',
				key: 'id'
			},
			field: 'identification_type'
		},
		number: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'number'
		},
		phone: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'phone'
		},
		fitcoints: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '20',
			field: 'fitcoints'
		},
		dateArl: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_arl'
		},
		arl: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'arl'
		},
		dateSaludPension: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_salud_pension'
		},
		saludPension: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'salud_pension'
		},
		profileDescription: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'profile_description'
		},
		emergency: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'emergency'
		},
		active: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'active'
		},
		nit: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'nit'
		},
		type: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'type'
		},
		insured: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'insured'
		},
		educationalLevel: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'educational_level',
				key: 'id'
			},
			field: 'educational_level'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'title'
		},
		coupon: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'coupon'
		},
		certificationSena: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'certification_sena'
		},
		avatar: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'avatar'
		},
		fotocopy: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'fotocopy'
		},
		valorCoupon: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			field: 'valor_coupon'
		},
		experiencia: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'experiencia',
				key: 'id'
			},
			field: 'experiencia'
		}
	}, {
		tableName: 'experts'
	});
};
