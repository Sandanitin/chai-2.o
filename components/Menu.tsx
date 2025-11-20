'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus, ShoppingCart, ChevronDown, ChevronLeft, ChevronRight, List, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const menuItems = [
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

const categoryTabs = [
  'ATTA',
  "SAUCE AND CHUTNEY'S",
  'FLOURS',
  'MILLETS',
  'SPICES',
  "DRY FRUIT'S",
  "PICKLE'S",
  "DAL'S",
  "LENTIL'S & FRYUMS/ PAPAD'S",
  'NOODLES',
];

const collectionOptions = [
  { label: 'Grocery', value: 'grocery', hours: '10:30 AM – 9:00 PM' },
  { label: 'Snacks', value: 'snacks', hours: '12:00 PM – 10:00 PM' },
  { label: 'Catering', value: 'catering', hours: '9:00 AM – 11:00 PM' },
];

interface MenuProps {
  onCartUpdate?: () => void;
}

const Menu = ({ onCartUpdate }: MenuProps) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(categoryTabs[0]);
  const [activeCollection, setActiveCollection] = useState(collectionOptions[0].value);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [isClient, setIsClient] = useState(false);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const collectionDropdownRef = useRef<HTMLDivElement>(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    const el = categoryScrollRef.current;
    if (!el) return;

    const updateScrollState = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };

    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collectionDropdownRef.current &&
        !collectionDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCollectionOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollCategories = (direction: 'left' | 'right') => {
    const el = categoryScrollRef.current;
    if (!el) return;
    const offset = direction === 'left' ? -260 : 260;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const addToCart = (itemId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);
      const updatedCart = existingItem
        ? prevCart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { id: itemId, quantity: 1 }];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: updatedCart } }));
      onCartUpdate?.();
      return updatedCart;
    });
  };

  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const searchActive = normalizedSearch.length > 0;
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch) ||
      item.category.toLowerCase().includes(normalizedSearch);
    if (searchActive) {
      return matchesSearch;
    }
    return item.category === activeCategory;
  });

  const currentCollection =
    collectionOptions.find((option) => option.value === activeCollection) ?? collectionOptions[0];

  return (
    <section id="menu" className="py-16 bg-transparent text-[#f5eddc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 rounded-3xl border border-[#2d1a11] bg-[#0b0503] text-[#f5eddc] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4" ref={collectionDropdownRef}>
                <button className="h-12 w-12 rounded-full border border-[#2d1a11] bg-[#120a07] text-[#f5eddc] flex items-center justify-center shadow-md">
                  <List className="h-5 w-5" />
                </button>
                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-[#f5eddc]/50">Collection</div>
                  <button
                    type="button"
                    onClick={() => setIsCollectionOpen((prev) => !prev)}
                    className="mt-1 flex items-center gap-2 text-lg font-semibold text-[#f5eddc] focus:outline-none"
                  >
                    {currentCollection.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isCollectionOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isCollectionOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-[#2d1a11] bg-[#120a07] text-sm shadow-xl z-10 overflow-hidden">
                      {collectionOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setActiveCollection(option.value);
                            setIsCollectionOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-3 hover:bg-[#1c0a05] ${
                            option.value === activeCollection ? 'text-[#c87534]' : 'text-[#f5eddc]'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="text-xs text-[#f5eddc]/60 mt-1">{currentCollection.hours}</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 flex-1">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f5eddc]/50" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Search in ${currentCollection.label}`}
                    className="w-full rounded-full border border-[#2d1a11] bg-[#050302] py-3 pl-11 pr-4 text-sm text-[#f5eddc] placeholder:text-[#f5eddc]/40 focus:border-[#c87534] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollCategories('left')}
                    disabled={!canScrollLeft}
                    className={`h-10 w-10 rounded-full border border-[#2d1a11] flex items-center justify-center transition ${
                      canScrollLeft ? 'bg-[#120a07] hover:bg-[#1c0a05]' : 'bg-[#120a07]/40 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4 text-[#f5eddc]" />
                  </button>
                  <button
                    onClick={() => scrollCategories('right')}
                    disabled={!canScrollRight}
                    className={`h-10 w-10 rounded-full border border-[#2d1a11] flex items-center justify-center transition ${
                      canScrollRight
                        ? 'bg-[#120a07] hover:bg-[#1c0a05]'
                        : 'bg-[#120a07]/40 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 text-[#f5eddc]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-[#2d1a11] bg-[#120a07]">
                <span className="h-0.5 w-6 bg-[#f5eddc]" />
              </div>
              <div className="relative flex-1">
                <div className="mb-3 flex justify-between text-[11px] tracking-[0.35em] uppercase text-[#f5eddc]/60">
                  <span>{searchActive ? 'Search results' : 'Browse categories'}</span>
                  {!searchActive && <span>{activeCategory}</span>}
                  {searchActive && <span>{filteredItems.length} items</span>}
                </div>
                <div
                  ref={categoryScrollRef}
                  className="flex gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {categoryTabs.map((category) => {
                    const isActive = category === activeCategory;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`relative pb-3 text-xs font-semibold tracking-[0.25em] uppercase transition ${
                          isActive ? 'text-[#f5eddc]' : 'text-[#f5eddc]/40'
                        }`}
                      >
                        {category}
                        <span
                          className={`absolute left-0 right-0 -bottom-0.5 h-0.5 transition ${
                            isActive ? 'bg-[#c87534]' : 'bg-transparent'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2d1a11]" />
              </div>
            </div>
          </div>
        </div>

        {searchActive && (
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[#2d1a11] bg-[#120a07] px-5 py-4 text-sm text-[#f5eddc]/80">
            <span>
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} for “{searchTerm}”
            </span>
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#c87534] underline-offset-4 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#120a07] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#2d1a11] hover:border-[#c87534]/50 flex flex-col"
              >
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={isClient && item.id <= 3}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.name}</h3>
                        <p className="text-sm text-white/80 mt-1">{item.description}</p>
                      </div>
                      <span className="text-amber-200 text-lg font-semibold">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <Button
                    onClick={() => addToCart(item.id)}
                    className="w-full font-medium py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 mt-auto"
                  >
                    <Plus className="h-4 w-4" />
                    Add to Basket
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-[#120a07] rounded-xl border border-[#2d1a11]">
            <p className="text-[#f5eddc]/70 mb-4">
              {searchActive
                ? <>No items match “{searchTerm}”.</>
                : <>No items available in {activeCategory} right now.</>}
            </p>
            <Button
              onClick={() => (searchActive ? setSearchTerm('') : setActiveCategory(categoryTabs[0]))}
              variant="outline"
              className="border-[#c87534] text-[#f5eddc]"
            >
              {searchActive ? 'Clear Search' : 'Back to Atta'}
            </Button>
          </div>
        )}

        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-[#120a07] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#2d1a11] max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#f5eddc] mb-3">Need a full cart?</h3>
            <p className="text-[#f5eddc]/70 mb-5 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
              Checkout to reserve your groceries or add more staples to your basket.
            </p>
            <Button
              onClick={() => router.push('/cart')}
              className="font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              View Cart & Checkout
              {getCartCount() > 0 && (
                <span className="ml-2 bg-[#050302]/30 text-[#f5eddc] text-xs font-semibold px-2 py-0.5 rounded-full">
                  {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'}
                </span>
              )}
            </Button>
            <p className="mt-3 text-xs text-[#f5eddc]/50">Delivery windows and prices refresh throughout the day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

