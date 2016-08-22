'use strict';
module.exports = function(sequelize, DataTypes) {
  var notebook = sequelize.define('notebook', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    isbn: DataTypes.STRING,
    google_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.notebook.belongsTo(models.user);
        models.notebook.hasMany(models.note, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return notebook;
};