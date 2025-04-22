import { ProductType } from "@/components/product/ProductCard";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Midnight Mirage",
    description:
      "A captivating blend of amber, black vanilla, and cedarwood that evokes the mystery of twilight hours.",
    price: 120,
    size: "100ml",
    image: "/Mockup 1.png",
    category: "signature",
    isNew: true,
  },
  {
    id: 2,
    name: "Mirage Noir",
    description:
      "An intense composition of black pepper, leather, and oud that expresses raw masculinity and confidence.",
    price: 135,
    size: "100ml",
    image: "/Mockup 2.png",
    category: "signature",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Atlas",
    description:
      "A sophisticated fusion of bergamot, cardamom, and sandalwood that captures the essence of worldly exploration.",
    price: 110,
    size: "50ml",
    image: "/Mockup 3.png",
    category: "signature",
  },
  {
    id: 4,
    name: "Phantom",
    description:
      "An enigmatic composition of iris, violet leaf, and musk that leaves an unforgettable impression.",
    price: 150,
    size: "100ml",
    image: "/Mockup 4.png",
    category: "limited",
    isNew: true,
  },
  {
    id: 5,
    name: "Monarch",
    description:
      "A regal blend of tobacco, vanilla, and spices that embodies timeless elegance and power.",
    price: 125,
    size: "100ml",
    image: "/Mockup 5.png",
    category: "signature",
    isBestseller: true,
  },
];

export const getProductById = (id: number): ProductType | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): ProductType[] => {
  return products
    .filter((product) => product.isBestseller || product.isNew)
    .slice(0, 4);
};

export const getNewArrivals = (): ProductType[] => {
  return products.filter((product) => product.isNew);
};

export const getBestsellers = (): ProductType[] => {
  return products.filter((product) => product.isBestseller);
};

export const getProductsByCategory = (category: string): ProductType[] => {
  return products.filter((product) => product.category === category);
};
