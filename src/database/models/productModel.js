const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "products";

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: true,
    };
  }
}

const productSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "id_product",
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "product_name",
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "product_description",
  },
  image: {
    allowNull: false,
    type: DataTypes.BLOB,
    field: "product_image",
  },
};

module.exports = {
  Product,
  productSchema,
};
