// src/app/layout.js
import { ApolloWrapper } from "../app/lib/apollo-wrapper";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
        <Navbar/>
          {children}
        <Footer/>
        </ApolloWrapper>
      </body>
    </html>
  );
}