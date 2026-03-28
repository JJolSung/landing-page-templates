"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const categories: Record<string, MenuItem[]> = {
  Appetizers: [
    {
      name: "Seared Foie Gras",
      description: "Caramelized fig, brioche crouton, aged balsamic reduction",
      price: "$28",
    },
    {
      name: "Tuna Tartare",
      description:
        "Yellowfin tuna, avocado mousse, sesame tuile, yuzu dressing",
      price: "$24",
    },
    {
      name: "Burrata Caprese",
      description:
        "Heirloom tomatoes, fresh burrata, basil oil, fleur de sel",
      price: "$22",
    },
    {
      name: "French Onion Soup",
      description:
        "Slow-caramelized onions, Gruyere crouton, thyme-infused broth",
      price: "$18",
    },
    {
      name: "Lobster Bisque",
      description:
        "Maine lobster, brandy cream, tarragon, micro chives",
      price: "$26",
    },
  ],
  Mains: [
    {
      name: "Wagyu Beef Tenderloin",
      description:
        "A5 grade, truffle pomme puree, roasted bone marrow jus",
      price: "$68",
    },
    {
      name: "Pan-Roasted Dover Sole",
      description:
        "Brown butter, capers, lemon, haricots verts, almond flakes",
      price: "$56",
    },
    {
      name: "Rack of Lamb",
      description:
        "Herb-crusted, ratatouille, rosemary jus, dauphinoise potatoes",
      price: "$52",
    },
    {
      name: "Duck Breast Confit",
      description:
        "Cherry gastrique, wilted spinach, sweet potato fondant",
      price: "$46",
    },
    {
      name: "Wild Mushroom Risotto",
      description:
        "Porcini, chanterelle, Parmigiano-Reggiano, white truffle oil",
      price: "$38",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Fondant",
      description: "Valrhona 70% dark chocolate, vanilla bean ice cream, gold leaf",
      price: "$18",
    },
    {
      name: "Tarte Tatin",
      description:
        "Caramelized apple, puff pastry, creme fraiche, calvados",
      price: "$16",
    },
    {
      name: "Creme Brulee",
      description:
        "Madagascar vanilla, caramelized sugar, fresh berries",
      price: "$15",
    },
    {
      name: "Cheese Selection",
      description:
        "Five artisanal cheeses, honeycomb, fig compote, walnut bread",
      price: "$24",
    },
    {
      name: "Mille-Feuille",
      description:
        "Crisp puff pastry, pastry cream, seasonal berries, spun sugar",
      price: "$17",
    },
  ],
};

const categoryNames = Object.keys(categories);

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);

  return (
    <section id="menu" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
              <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
                The Menu
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-green mb-4">
              Seasonal <span className="italic">Selections</span>
            </h2>
            <p className="text-restaurant-green/60 max-w-lg mx-auto">
              Our menu evolves with the seasons, showcasing the finest
              ingredients at their peak. Each dish is a testament to our
              culinary philosophy.
            </p>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-1 mb-12">
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 text-sm tracking-widest uppercase transition-colors ${
                  activeCategory === category
                    ? "text-restaurant-green"
                    : "text-restaurant-green/40 hover:text-restaurant-green/70"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="menu-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-restaurant-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {categories[activeCategory].map((item, i) => (
              <div
                key={item.name}
                className={`py-6 ${
                  i !== categories[activeCategory].length - 1
                    ? "border-b border-restaurant-gold/15"
                    : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-playfair text-lg sm:text-xl text-restaurant-green">
                    {item.name}
                  </h3>
                  <span className="flex-1 border-b border-dotted border-restaurant-green/20 min-w-[40px] translate-y-[-4px]" />
                  <span className="font-playfair text-lg text-restaurant-gold">
                    {item.price}
                  </span>
                </div>
                <p className="italic text-sm text-restaurant-green/50">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-restaurant-green/40 text-xs tracking-wider uppercase">
              Please inform your server of any allergies or dietary
              requirements
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
