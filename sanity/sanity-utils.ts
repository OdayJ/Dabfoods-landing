import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export async function getProducts(categoryName: any) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  const query = groq`*[_type == "category" && name == $categoryName][0]{
    "products": products[]->{
      name,
      number,
      "imageUrl": image.asset->url
    }
  }.products
  `;

  const params = { categoryName };

  return await client.fetch(query, params);
}
