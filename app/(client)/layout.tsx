import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import SplashScreen from "@/components/SplashScreen";
import ScrollWrapper from "@/components/ScrollWrapper";




const raleway = localFont({
  src: "../fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Stiparf Ecommerce",
  description: "An Ecommerce app for Perfume Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.variable} antialiased`}>
          <SplashScreen>
            <ScrollWrapper>
            <Header />

            {children}
            <Footer />
            <Toaster position="bottom-right" toastOptions={{
              style: {
                background: '#000000',
                color: '#ffffff',
              },
            }} />
            </ScrollWrapper>
          </SplashScreen>
          
        </body>
      </html>
    </ClerkProvider>

  );
}