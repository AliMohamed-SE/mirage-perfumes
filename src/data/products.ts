
import { ProductType } from "@/components/product/ProductCard";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Midnight Mirage",
    description: "A captivating blend of amber, black vanilla, and cedarwood that evokes the mystery of twilight hours.",
    price: 120,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature",
    isNew: true
  },
  {
    id: 2,
    name: "Mirage Noir",
    description: "An intense composition of black pepper, leather, and oud that expresses raw masculinity and confidence.",
    price: 135,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1595425793268-7d6d10483970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature",
    isBestseller: true
  },
  {
    id: 3,
    name: "Atlas",
    description: "A sophisticated fusion of bergamot, cardamom, and sandalwood that captures the essence of worldly exploration.",
    price: 110,
    size: "50ml",
    image: "https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature"
  },
  {
    id: 4,
    name: "Phantom",
    description: "An enigmatic composition of iris, violet leaf, and musk that leaves an unforgettable impression.",
    price: 150,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "limited",
    isNew: true
  },
  {
    id: 5,
    name: "Monarch",
    description: "A regal blend of tobacco, vanilla, and spices that embodies timeless elegance and power.",
    price: 125,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature",
    isBestseller: true
  },
  {
    id: 6,
    name: "Voyager",
    description: "A fresh yet complex composition of citrus, sea salt, and amber that evokes coastal journeys.",
    price: 115,
    size: "50ml",
    image: "https://images.unsplash.com/photo-1618330834871-ba34c3653ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature"
  },
  {
    id: 7,
    name: "Obsidian",
    description: "A bold fusion of black pepper, leather, and smoke that embodies strength and mystery.",
    price: 140,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "limited"
  },
  {
    id: 8,
    name: "Dusk",
    description: "An alluring blend of amber, tonka bean, and cedar that captures the magic of twilight.",
    price: 130,
    size: "100ml",
    image: "https://images.unsplash.com/photo-1595425793268-7d6d10483970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "signature"
  }
];

export const getProductById = (id: number): ProductType | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): ProductType[] => {
  return products.filter(product => product.isBestseller || product.isNew).slice(0, 4);
};

export const getNewArrivals = (): ProductType[] => {
  return products.filter(product => product.isNew);
};

export const getBestsellers = (): ProductType[] => {
  return products.filter(product => product.isBestseller);
};

export const getProductsByCategory = (category: string): ProductType[] => {
  return products.filter(product => product.category === category);
};
