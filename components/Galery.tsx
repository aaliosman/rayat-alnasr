'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = ['All', 'Coffee', 'Cafe', 'Events'];

const images = [
  {
    id: 1,
    src: '/images/gallery/01-cafe-grains-burlap-1024x1024.jpg',
    category: 'Coffee',
    title: 'Perfect Brew',
  },
  {
    id: 2,
    src: '/images/gallery/1636995833-nutshero.jpeg',
    category: 'Cafe',
    title: 'Our Space',
  },
  {
    id: 3,
    src: '/images/gallery/61a80e0d7d31f.cover.jpg',
    category: 'Events',
    title: 'Coffee Workshop',
  },
  {
    id: 4,
    src: '/images/gallery/images.jpeg',
    category: 'Coffee',
    title: 'Morning Ritual',
  },
  {
    id: 5,
    src: '/images/gallery/Types-of-coffee-beans-hero__1_.jpg',
    category: 'Cafe',
    title: 'Cozy Corner',
  },
  {
    id: 6,
    src: '/images/gallery/cafe-10-07-2025.jpg',
    category: 'Coffee',
    title: 'Iced Perfection',
  },
  {
    id: 7,
    src: '/images/gallery/images (1).jpeg',
    category: 'Coffee',
    title: 'Latte Art',
  },
  {
    id: 8,
    src: '/images/gallery/pexels-david-disponett-1118410-2161650.jpg',
    category: 'Events',
    title: 'Coffee Tasting',
  },
  {
    id: 9,
    src: '/images/gallery/pexels-rita-lakewood-142957273-10433523.jpg',
    category: 'Cafe',
    title: 'Outdoor Seating',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f5f2]" id="gallery">
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-8">معرضنا</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-72">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
