import { Roboto } from "next/font/google";
import "./../(root)/globals.css"
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const roboto = Roboto({ subsets: ["latin"], weight : "500" });
export const metadata : Metadata = {
  title : "login/singup",
  description : "login first to accses content"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastContainer />
        {children}
        </body>
    </html>
  )
}
