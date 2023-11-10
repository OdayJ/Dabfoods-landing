export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "Name of the product",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      description: "Image of the product",
    },
    {
      name: "number",
      type: "number",
      title: "Number",
      description: "A unique identifying number for the product",
    },
  ],
};
