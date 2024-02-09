import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Secure Blog",
  description: "Write what you want!",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body
        className="dark:bg-[--bg-dark] dark:text-[--textSoft]
        bg-[--bg-light] text-[--tex-dark]
        flex flex-col justify-between h-[100vh]
        "
      >
        <Header />
        <main className="container h-full py-2">{children}</main>
      </body>
    </html>
  );
}
