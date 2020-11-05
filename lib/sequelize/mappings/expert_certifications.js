/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expertCertifications', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		certification: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'certification'
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
		certificationType: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'certifications_type',
				key: 'id'
			},
			field: 'certification_type'
		}
	}, {
		tableName: 'expert_certifications'
	});
};
