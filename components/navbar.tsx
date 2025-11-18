'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CartItems } from '@/components/cart-items';

export function Navbar() {
  const { items } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="w-full flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={130} height={100} />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-md">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              الرئيسية
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900">
              خدماتنا
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-gray-900">
              معرضنا
            </Link>
            {/* <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              تواصل معنا
            </Link> */}
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              عن الشركة
            </Link>
            
          </div>

          <div className="flex items-center md:pl-[200px]">
            <Button className="px-6 py-2">إكتشف</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
