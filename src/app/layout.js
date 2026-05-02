import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "SunEssential",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col bg-amber-50">
        <Navbar />
        <main className="grow px-4">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
