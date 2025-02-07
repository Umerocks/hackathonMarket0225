"use client";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const CartProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      successUrl="https://Xpert Decorsecommerce.vercel.app/stripe/success"
      cancelUrl="https://Xpert Decorsecommerce.vercel.app/stripe/failure"
      stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY || ""}
      currency="USD"
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default CartProviderWrapper;
