const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This will add category_id to the Product model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // This will add category_id to the Product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This will add product_id to the ProductTag model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This will add tag_id to the ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

