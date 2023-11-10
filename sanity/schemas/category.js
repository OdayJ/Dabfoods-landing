export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
      description: "Name of the product category",
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      description: "Products under this category",
    },
  ],
};
