'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Award, Users, Leaf, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'الجودة أولا',
    description:
      'نحن نستورد فقط أجود أنواع الحبوب من المزارع المستدامة في جميع أنحاء العالم.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'التركيز على المجتمع',
    description: 'خلق مساحة ترحيبية لعشاق القهوة للتواصل.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'الاستدامة',
    description: 'ملتزمون بالممارسات المسؤولة بيئيًا.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'التميز',
    description: 'التحسين المستمر لحرفتنا وخدماتنا..',
  },
];

const team = [
  {
    name: 'Kamrul Hasan',
    role: 'Master Barista',
    image: 'https://avatars.githubusercontent.com/u/60602764?v=4',
  },
  {
    name: 'Hmd kamrul',
    role: 'Coffee Roaster',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EvsAlFJXNQLG4HwCEeDglyEJJsB5DOHLCQ&s',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Cafe Manager',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0V4khZ9p_Y2ZSIjBJgJd9EVUITbxn5HYsZg&s',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-24">
        {/* Hero Section */}


        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 mt-28"
        >
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60"
              alt="Coffee brewing"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">رسالتنا و رؤيتنا</h2>
            <p className="text-gray-600 mb-6">
             توفير منتجات غذائية موثوقة وآمنة وبجودة عالية تلبي احتياجات المستهلكين، مع بناء علاقات تجارية طويلة الأمد قائمة على الثقة والمصداقية.
            </p>

            <p className="text-gray-600 mb-6">
              نسعى أن نكون من أبرز الشركات في قطاع الاستيراد والتصدير الغذائي في المنطقة، وأن نُعرف بتميزنا وجودة منتجاتنا وسرعة تنفيذ الطلبيات.
            </p>
      
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
