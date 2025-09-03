// ecommerce-basico/resolvers.js
const resolvers = {
  Query: {
    products: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    },
    product: async (parent, { id }) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    },
  },
};

module.exports = resolvers;