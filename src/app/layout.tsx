import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "@/components/homepage/top_header";
import MiddleHeader from "@/components/homepage/middle_header";
import NavHeader from "@/components/homepage/nav_header";
import Footer from "@/components/homepage/footer";
import CartProviderWrapper from "@/components/cartcomponents/cartProvider";
import { WishlistProvider } from "@/components/wishlistcomponent/wishlistcontext";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration for SEO and social media sharing
export const metadata: Metadata = {
  title: "Xpert Decors - Modern Furniture Store",
  description:
    "Discover Xpert Decors – your go-to online furniture store for premium sofas, chairs, and home decor. Shop stylish and comfortable furniture for your living space with fast delivery and great deals.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "furniture store",
    "modern furniture",
    "sofas",
    "chairs",
    "home decor",
    "affordable furniture",
    "luxury furniture",
    "best furniture deals",
    "high-quality furniture",
    "shop furniture online",
  ],
  openGraph: {
    title: "Xpert Decors - Premium Furniture for Your Home",
    description:
      "Shop high-quality, stylish furniture at Xpert Decors. From sofas to armchairs, we offer the best furniture with great deals and fast shipping.",
    url: "https://Xpert Decorsecommerce.vercel.app/",
    siteName: "Xpert Decors",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "Xpert Decors Online Furniture Store",
      },
    ],
    type: "website",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Ensuring favicon loads properly */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />

        {/* ✅ Additional SEO Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="author" content="Xpert Decors Team" />
        <meta
          name="robots"
          content="index, follow"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderWrapper>
          <WishlistProvider>
            <TopHeader />
            <MiddleHeader />
            <NavHeader />
            {children}
            <Footer />
          </WishlistProvider>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
