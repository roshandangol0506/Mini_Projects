import Image from "next/image";
import React from "react";

const Ecommerce = () => {
  const products = [
    {
      id: "1",
      name: "Vintage Leather Backpack",
      description:
        "Handcrafted genuine leather backpack with multiple compartments and adjustable straps. Perfect for travel and everyday use.",
      price: 129.99,
      currency: "USD",
      category: "Bags & Luggage",
      images: [
        "https://www.theleathershop.com/media/catalog/product/cache/9270b3d51303c3634cdf97d012e444dc/b/a/backpack-vintage-01_4.jpg",
        "https://example.com/images/backpack1_side.jpg",
        "https://example.com/images/backpack1_inside.jpg",
      ],
      brand: "Artisan Crafted",
      sku: "ABC-123",
      stock: 50,
      rating: 4.5,
      reviews: [
        {
          user: "John Doe",
          rating: 5,
          comment: "Excellent quality backpack! Highly recommend.",
        },
        {
          user: "Jane Smith",
          rating: 4,
          comment: "Great bag, but a bit pricey.",
        },
      ],
      features: [
        "Genuine leather",
        "Adjustable straps",
        "Multiple compartments",
        "Durable construction",
      ],
      dimensions: {
        height: "18 inches",
        width: "12 inches",
        depth: "6 inches",
      },
      weight: "3 lbs",
      colors: ["Brown", "Black", "Tan"],
      material: "Genuine Leather",
    },
    {
      id: "2",
      name: "Wireless Noise-Cancelling Headphones",
      description:
        "Over-ear headphones with active noise cancellation, Bluetooth 5.0, and long battery life. Immerse yourself in your music without distractions.",
      price: 199.99,
      currency: "USD",
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61AZnUYG7sL._AC_SL1440_.jpg",
        "https://example.com/images/headphones1_white.jpg",
      ],
      brand: "SoundWave",
      sku: "XYZ-456",
      stock: 100,
      rating: 4.2,
      reviews: [
        {
          user: "David Lee",
          rating: 4,
          comment: "Good sound quality and noise cancellation.",
        },
      ],
      features: [
        "Active noise cancellation",
        "Bluetooth 5.0",
        "Long battery life (up to 30 hours)",
        "Built-in microphone",
      ],
      dimensions: {
        height: "7 inches",
        width: "6 inches",
        depth: "3 inches",
      },
      weight: "0.5 lbs",
      colors: ["Black", "White"],
      connectivity: "Bluetooth 5.0, 3.5mm jack",
    },
    {
      id: "3",
      name: "Ceramic Coffee Mug Set",
      description:
        "Set of 4 handcrafted ceramic mugs, perfect for enjoying your morning coffee or tea. Dishwasher and microwave safe.",
      price: 29.99,
      currency: "USD",
      category: "Kitchen & Dining",
      images: ["https://example.com/images/mug_set.jpg"],
      brand: "ClayArt",
      sku: "MUG-789",
      stock: 75,
      rating: 4.7,
      reviews: [],
      features: [
        "Set of 4 mugs",
        "Handcrafted ceramic",
        "Dishwasher safe",
        "Microwave safe",
      ],
      dimensions: {
        height: "4 inches",
        width: "3.5 inches",
        depth: "3.5 inches",
      },
      weight: "2 lbs",
      colors: ["Assorted Pastel Colors"],
      material: "Ceramic",
    },
  ];
  return (
    <div className="flex">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col bg-gray-100 p-2 m-2 shadow-xl w-60"
          >
            <p className="font-bold">{item.name}</p>
            <Image
              src={item.images[0]}
              height={100}
              width={100}
              alt="image product"
            />
            <p>{item.price}</p>
            <p> {item.brand}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Ecommerce;
