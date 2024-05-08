"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ApolloProvider, gql } from "@apollo/client";
import { client } from "./ApolloClient";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";

export default function Home() {

 
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Hero />
      <ProductSection/>
      <Footer/>
    </ApolloProvider>
  );
}
