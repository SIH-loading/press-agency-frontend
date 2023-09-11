import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata = {
  title: "press-agency",
  description: "Generated by team loading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[##f7f7f7] text-black">
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}