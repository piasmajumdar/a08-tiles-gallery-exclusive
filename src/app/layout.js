import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

export const inter = Inter({
  subsets: ["latin"],
})

export const playFair = Playfair_Display({
  subsets: ["latin"]
})

export const metadata = {
  title: "Tiles Gallery",
  description: "Explore the new world in your home",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F4]">
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>

    </html>
  );
}
