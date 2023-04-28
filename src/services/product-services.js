import apiFetch from "./api-fetch";

export async function getAllProducts() {
  const products = await apiFetch("products");
  return products;
}

export async function getProduct(id) {
  const product = await apiFetch(`products/${id}`);
  return product;
}

export async function updateProduct(id, body) {
  const product = await apiFetch(`products/${id}`, {
    body,
    method: 'PATCH'
  });
  return product;
}

export async function createProduct(body) {
  const product = await apiFetch('products', {
    body
  });
  return product;
}
