import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Chirag Pandey",
  description: "Portfolio website of full stack engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="h-screen w-screen font-poppins p-4">{children}</main>
      </body>
    </html>
  );
}
