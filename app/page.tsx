'use client';

import {
  ShoppingCart,
  Star,
  Clock,
  MapPin,
  Award,
  Users,
  Coffee as CoffeeIcon,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { useCart } from '@/hooks/use-cart';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Gallery from '../components/Galery';

const features = [
  {
    icon: <CoffeeIcon className="h-6 w-6" />,
    title: 'شحن و استيراد',
    description: '•	استيراد وشحن المواد الغذائية من عدة دول',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'طلبيات',
    description: '•	توفير طلبيات بالجملة للمصانع والمتاجر',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'تعبئة و تغليف',
    description: '•	توفير خدمة التعبئة والتغليف حسب احتياج العميل',
  },
];

export default function Home() {
  const { addItem } = useCart();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [productsRef, productsInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
  });
  const [storyRef, storyInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });
  const [locationsRef, locationsInView] = useInView({ triggerOnce: true });
  const [newsletterRef, newsletterInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      {/* Hero Section */}
      <motion.header
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative h-screen bg-black mt-16"
      >
        <Image
          // src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=60"
          // src="https://images.pexels.com/photos/10541145/pexels-photo-10541145.jpeg"
          // src="https://www.datocms-assets.com/20941/1634571683-coffeehero.png?auto=format&dpr=0.71&fit=max&w=1200"
          src="https://t3.ftcdn.net/jpg/01/94/82/86/360_F_194828624_llDpKzFNYmi6cfHVF8GOOoAe5KTJlc9N.jpg"
          alt="Coffee shop hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl font-bold mb-4"
          >
            شركة راية النصر
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8"
          >
            لاستيراد المواد الغذائية والفواكه الطازجة
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              variant="default"
              className="hover:bg-white hover:text-primary"
            >
              تواصل معنا
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-12" id='services'>
        {/* Features Section */}
        <motion.section
          ref={storyRef}
          initial={{ y: 40, opacity: 0 }}
          animate={storyInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24 mt-24"
        >
          <h1 className="text-4xl font-bold mb-8">خدماتنا</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={storyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Products Section */}
        {/* <motion.section
          ref={productsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={productsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <CoffeeIcon className="h-8 w-8" />
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 20, opacity: 0 }}
                animate={productsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <Link href={`/menu/${product.id}`}>
                    <div className="relative h-48 cursor-pointer transition-transform hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/menu/${product.id}`}>
                      <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold">
                        ${product.price}
                      </span>
                      <Button onClick={() => addItem(product)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Our Story Section */}
        <motion.section
          ref={processRef}
          initial={{ y: 40, opacity: 0 }}
          animate={processInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60"
                alt="Coffee brewing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">عن راية النصر</h2>
              <p className="text-gray-600 mb-6">
                تأسست شركة راية النصر بهدف توفير منتجات غذائية عالية الجودة
                للأسواق المحلية، البن بأنواعها، البقوليات، المواد الغذائية.
              </p>
              <p className="text-gray-600 mb-6">
                تعتمد الشركة على شبكة واسعة من الموردين حول العالم لضمان الجودة
                والاستمرارية، وتعمل وفق معايير صارمة في الفحص والتخزين والنقل.
              </p>
              {/* <Button size="lg">Learn More About Us</Button> */}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        {/* <motion.section
          ref={testimonialsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Client Testimonial
          </h2>
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600">
              4.9 out of 5 Overall Star Rating for All Local Business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ y: 20, opacity: 0 }}
                animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Locations Section */}
        {/* <motion.section
          ref={locationsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={locationsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Visit Our Cafes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ y: 20, opacity: 0 }}
                animate={locationsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {location.address}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {location.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}
        <Gallery />
      </main>
    </div>
  );
}
