// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { ShoppingBag } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useCart } from '@/hooks/use-cart';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { CartItems } from '@/components/cart-items';

// export function Navbar() {
//   const { items } = useCart();

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
//         <div className="w-full flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center">
//             <Image src="/images/logo.png" alt="Logo" width={130} height={100} />
//           </Link>

//           <div className="hidden md:flex items-center gap-8 text-md">
//             <Link href="/" className="text-gray-700 hover:text-gray-900">
//               الرئيسية
//             </Link>
//             <Link href="#services" className="text-gray-700 hover:text-gray-900">
//               خدماتنا
//             </Link>
//             <Link href="#gallery" className="text-gray-700 hover:text-gray-900">
//               معرضنا
//             </Link>
//             {/* <Link href="/contact" className="text-gray-700 hover:text-gray-900">
//               تواصل معنا
//             </Link> */}
//             <Link href="/about" className="text-gray-700 hover:text-gray-900">
//               عن الشركة
//             </Link>

//           </div>

//           <div className="flex items-center md:pl-[200px]">
//             <Button className="px-6 py-2">إكتشف</Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export function Navbar() {
  return (
    // <nav className="fixed top-0 w-full z-50 bg-white border-b">
    //   <div className="max-w-7xl px-4 sm:px-6 py-12 border border-blue-600">
    <div className="w-full flex items-center justify-between md:justify-evenly p-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={130} height={100} />
      </Link>

      {/* Desktop Menu */}
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

        <Link href="#about" className="text-gray-700 hover:text-gray-900">
          عن الشركة
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* CTA Button */}
        <Button className="hidden md:block px-6 py-2">إكتشف</Button>

        {/* Mobile Hamburger */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="w-7 h-7" />
          </SheetTrigger>

          {/* Mobile Drawer (opens from right) */}
          <SheetContent side="right" className="pt-20">
            <div className="flex flex-col gap-6 text-lg text-right">
              <SheetClose asChild>
                <Link href="/">الرئيسية</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#services">خدماتنا</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#gallery">معرضنا</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#about">عن الشركة</Link>
              </SheetClose>

              <SheetClose asChild>
                <Button className="mt-6 w-full">إكتشف</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    //   </div>
    // </nav>
  );
}
