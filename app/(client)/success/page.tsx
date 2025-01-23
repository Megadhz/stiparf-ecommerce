'use client';

import useCartStore from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from 'motion/react';
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";


const SuccessPage = () => {
    const searchParams = useSearchParams()
    const orderNumber = searchParams.get('orderNumber');
    const sessionId = searchParams.get('session_id');
    const { resetCart } = useCartStore()
    const router = useRouter();
    useEffect(() => {
        if (!orderNumber && !sessionId) {
            router.push('/');
        } else {
            resetCart();

        }
    }, [orderNumber, sessionId, resetCart])

    return (
        <div className="py-10  flex items-center justify-center p-4 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-golddark rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"

            >
                <motion.div className="w-24 h-24 bg-[#111111]/90 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Check className='text-whitegold w-12 h-12' />
                </motion.div>
                <h1 className="text-3xl font-bold to-gray-900 mb-4">
                    Order confirmed!
                </h1>
                <div className="space-y-4 mb-8 text-left">
                    <p className="text-[#111111]">Thank you for your purchase. We&apos;re processing your order and will ship it soon. A confirmation email with your order details will be sent to your inbox shortly.</p>
                    <p className="text-[#111111]">Order Number: <span className="text-black font-semibold">{orderNumber}</span></p>
                </div>
                <div className="bg-golddark/50 border border-[#111111] rounded-lg p-4 mb-8">
                    <h2 className="font-semibold text-[#111111] mb-2">
                        What&apos;s Next?
                    </h2>
                    <ul className="text-[#111111] text-sm space-y-1">
                        <li>Check your email for order confirmation</li>
                        <li>We&apos;ll notify you when your order ships</li>
                        <li>Track your order status anytime</li>
                    </ul>
                </div>
                {/* Order Tracker */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-[#111111]/90 text-white rounded-lg hover:bg-[#111111]/80 transition-all duration-300 shadow-md"
          >
            <Home className="w-5 h-5 mr-2 " />
            Home
          </Link>
          <Link
            href="/orders"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-whitegold text-black border border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <Package className="w-5 h-5 mr-2" />
            Orders
          </Link>
          <Link
            href="category/new"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-[#111111]/90 text-white rounded-lg hover:bg-[#111111]/80 transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage
