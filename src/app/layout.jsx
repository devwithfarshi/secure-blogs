import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Secure Blog",
  description: "Write what you want!",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body
        className="dark:bg-[#32174D] dark:text-[#ffffff]
        bg-[#ffffff] text-[#0a0a0a]
        "
      >
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
