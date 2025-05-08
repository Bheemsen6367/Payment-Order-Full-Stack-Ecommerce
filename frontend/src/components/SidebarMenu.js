import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const categories = [
  { title: "New Arrivals" },
  {
    title: "Deal Of The Day",
    items: ["Inspired By Indya.com "]
  },
  { title: "Top Trendings" },
  { title: "Shop By Designer" },
  {
    title: "Celebs Wear",
    items: [
      "Varun Dhawan", "Ritik Roshan", "Shahrukh Khan",
      "Akshay Kumar", "Salman Khan", "Ranveer Kapoor", "Ranveer Singh"
    ]
  },
  {
    title: "Kurta Set",
    items: [
      "Everyday Wear", "Short Kurta", "Long Kurta", "Festive Kurta", "Pathani Kurta", "Asymmetric Kurta",
      "Straight Kurta", "Printed Kurta", "Solid Kurta", "Designer Kurta",
      "Casual Kurta", "Cotton Kurta", "Silk Kurta"
    ]
  },
  {
    title: "Festive Wear",
    items: ["Everyday Wear", "Wedding", "Haldi", "Mehndi", "Cocktail", "Reception"]
  },
  {
    title: "Top Wear",
    items: [
      {
        title: "Shirts",
        subItems: ["Plain", "Stripes", "Checks", "Printed", "Oversized", "Overshirt", "Crochet", "Linen"]
      },
      {
        title: "T-Shirts",
        subItems: ["Basic", "Polo", "Oversized"]
      },
      "Sweatshirts",
      "Jackets",
      "Blazers for Men",
      "Sweaters",
      "Suits"
    ]
  },
  {
    title: "Bottom Wear",
    items: [
      {
        title: "Trousers",
        subItems: ["Formal", "Casual", "Chinos", "Drawstring"]
      },
      {
        title: "Jeans",
        subItems: ["Slim Fit", "Skinny", "Straight", "Distressed"]
      },
      "Shorts",
      "Track Pants"
    ]
  },
  {
    title: "Winter Wear",
    items: [
      {
        title: "Jackets",
        subItems: ["Denim Jackets", "Puffer Jackets", "Bomber Jackets"]
      },
      {
        title: "Sweaters",
        subItems: ["Wool Sweaters", "Cotton Sweaters", "Cardigans"]
      },
      "Hoodies",
      "Blazers"
    ]
  },
  {
    title: "Accessories",
    items: ["Sunglasses", "Belts", "Wallets", "Accessories", "Socks"]
  },
  {
    title: "Sports & Activewear",
    items: ["Track Pants", "T-Shirts", "Shorts", "Jackets", "Track Suits"]
  },
  {
    title: "Footwear",
    items: ["Casual Shoes", "Sport Shoes", "Flip Flops", "Formal Shoes", "Sandals", "Boots"]
  },
  {
    title: "Innerwear & Sleepwear",
    items: ["Track Pants", "Vests", "Briefs", "Boxers", "Trunks", "Nightwear Sets"]
  },
];


const SidebarMenu = ({ isOpen, onClose }) => {
const [openCategory, setOpenCategory] = useState(null);
const [openSubCategory, setOpenSubCategory] = useState(null);

const toggleCategory = (title) => {
  setOpenCategory(prev => (prev === title ? null : title));
  setOpenSubCategory(null); // close subcategory when switching main
};

const toggleSubCategory = (title) => {
  setOpenSubCategory(prev => (prev === title ? null : title));
};


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
          <button onClick={onClose} className="text-xl text-gray-800 hover:text-red-600">
            <FaTimes />
          </button>
        </div>

        <nav className="p-4 space-y-3 text-gray-700 font-medium">
  {categories.map(cat => (
    <div key={cat.title}>
      <div
        onClick={() => Array.isArray(cat.items) && toggleCategory(cat.title)}
        className={`flex justify-between items-center p-2 hover:bg-gray-100 rounded ${Array.isArray(cat.items) ? 'cursor-pointer' : ''}`}
      >
        <span>{cat.title}</span>
        {Array.isArray(cat.items) && (
          openCategory === cat.title ? <FaChevronDown /> : <FaChevronRight />
        )}
      </div>

      {openCategory === cat.title && Array.isArray(cat.items) && (
        <div className="pl-4 mt-1 space-y-1">
          {cat.items.map((item, i) => {
            // string item
            if (typeof item === "string") {
              return (
                <Link
                  to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  key={i}
                  onClick={onClose}
                  className="block hover:text-red-600 transition"
                >
                  {item}
                </Link>
              );
            }
            // object item with subItems
            else if (typeof item === "object" && item.title && Array.isArray(item.subItems)) {
              return (
                <div key={i}>
                  <div
                    onClick={() => toggleSubCategory(item.title)}
                    className="flex justify-between items-center cursor-pointer font-semibold hover:text-red-500"
                  >
                    <span>{item.title}</span>
                    {openSubCategory === item.title ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openSubCategory === item.title && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.subItems.map((sub, j) => (
                        <Link
                          to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          key={j}
                          onClick={onClose}
                          className="block text-sm hover:text-red-600 transition"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  ))}
</nav>


      </div>
    </>
  );
};

export default SidebarMenu;
