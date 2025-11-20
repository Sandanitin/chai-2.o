export type MenuCategory =
  | 'ATTA'
  | "SAUCE AND CHUTNEY'S"
  | 'FLOURS'
  | 'MILLETS'
  | 'SPICES'
  | "DRY FRUIT'S"
  | "PICKLE'S"
  | "DAL'S"
  | "LENTIL'S & FRYUMS/ PAPAD'S"
  | 'NOODLES';

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: MenuCategory;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Royal Sharbati Atta',
    price: 12.99,
    description: 'Stone-milled wheat flour that keeps rotis soft and fluffy.',
    image: '/images/Hyderabadi Biryani.jpg',
    category: 'ATTA',
  },
  {
    id: 2,
    name: 'Whole Wheat Chakki Atta',
    price: 10.49,
    description: 'Traditional chakki grinding for deep aroma and softness.',
    image: '/images/Bun Maska.jpg',
    category: 'ATTA',
  },
  {
    id: 3,
    name: 'Tangy Tomato Chutney',
    price: 5.49,
    description: 'Slow-cooked tomatoes, garlic, and spices for a zingy finish.',
    image: '/images/Chicken 65.jpg',
    category: "SAUCE AND CHUTNEY'S",
  },
  {
    id: 4,
    name: 'Coconut Peanut Chutney',
    price: 4.49,
    description: 'Roasted peanuts with fresh coconut for dosa mornings.',
    image: '/images/iran chaai.png',
    category: "SAUCE AND CHUTNEY'S",
  },
  {
    id: 5,
    name: 'Multigrain Flour Blend',
    price: 8.99,
    description: 'Ragi, jowar, and whole wheat blended for added fibre.',
    image: '/images/Bun Maska.jpg',
    category: 'FLOURS',
  },
  {
    id: 6,
    name: 'Besan (Gram Flour)',
    price: 6.49,
    description: 'Fine gram flour for crisp pakoras and dhokla.',
    image: '/images/Chicken 65.jpg',
    category: 'FLOURS',
  },
  {
    id: 7,
    name: 'Foxtail Millet',
    price: 7.99,
    description: 'Ready-to-cook millets that are light, nutty, and wholesome.',
    image: '/images/iran chaai.png',
    category: 'MILLETS',
  },
  {
    id: 8,
    name: 'Little Millet (Samai)',
    price: 7.49,
    description: 'Fast-cooking millet ideal for upma and pongal.',
    image: '/images/Hyderabadi Biryani.jpg',
    category: 'MILLETS',
  },
  {
    id: 9,
    name: 'Heritage Garam Masala',
    price: 4.99,
    description: 'Hand-roasted spices to give every curry a royal lift.',
    image: '/images/Chicken 65.jpg',
    category: 'SPICES',
  },
  {
    id: 10,
    name: 'Malabar Pepper Powder',
    price: 5.99,
    description: 'Single-origin pepper with a bold, citrusy kick.',
    image: '/images/Vada Pav.jpg',
    category: 'SPICES',
  },
  {
    id: 11,
    name: 'Premium Dry Fruit Mix',
    price: 15.99,
    description: 'Almonds, pistachios, raisins, and cashews for daily snacking.',
    image: '/images/Vada Pav.jpg',
    category: "DRY FRUIT'S",
  },
  {
    id: 12,
    name: 'Seed & Berry Trail Mix',
    price: 13.5,
    description: 'Cranberries, pumpkin seeds, and figs with jaggery glaze.',
    image: '/images/Chicken 65.jpg',
    category: "DRY FRUIT'S",
  },
  {
    id: 13,
    name: 'Andhra Mango Pickle',
    price: 6.99,
    description: 'A fiery, gingery pickle that tastes like amma’s batch.',
    image: '/images/Chicken 65.jpg',
    category: "PICKLE'S",
  },
  {
    id: 14,
    name: 'Lemon Avakaya Pickle',
    price: 5.99,
    description: 'Sun-cured lemons tossed in chili, rock salt, and oil.',
    image: '/images/Bun Maska.jpg',
    category: "PICKLE'S",
  },
  {
    id: 15,
    name: 'Protein-rich Mixed Dals',
    price: 9.49,
    description: 'Toor, masoor, moong, and chana dal pre-cleaned and ready.',
    image: '/images/Hyderabadi Biryani.jpg',
    category: "DAL'S",
  },
  {
    id: 16,
    name: 'Urad Chilka Dal',
    price: 7.49,
    description: 'Split black gram for creamy dals and crisp dosas.',
    image: '/images/Chicken 65.jpg',
    category: "DAL'S",
  },
  {
    id: 17,
    name: 'Lentils & Fryums Combo',
    price: 11.99,
    description: 'Crispy papads sitting with hearty lentils for thali days.',
    image: '/images/Chicken 65.jpg',
    category: "LENTIL'S & FRYUMS/ PAPAD'S",
  },
  {
    id: 18,
    name: 'Jeera Papad Basket',
    price: 6.25,
    description: 'Hand-rolled papads with cumin seeds and peppercorns.',
    image: '/images/Vada Pav.jpg',
    category: "LENTIL'S & FRYUMS/ PAPAD'S",
  },
  {
    id: 19,
    name: 'Homestyle Noodles',
    price: 4.49,
    description: 'Air-dried noodles that stay springy and soak sauces evenly.',
    image: '/images/Bun Maska.jpg',
    category: 'NOODLES',
  },
  {
    id: 20,
    name: 'Hakka Wheat Noodles',
    price: 5.99,
    description: 'Whole wheat noodles that stir-fry without turning soggy.',
    image: '/images/Chicken 65.jpg',
    category: 'NOODLES',
  },
];
