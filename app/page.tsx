"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterNav from "./components/FilterNav";
import Product from "./components/Product";
import { ApolloProvider, gql } from "@apollo/client";
import { client } from "./ApolloClient";
import Footer from "./components/Footer";

export default function Home() {

 
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Hero />
      <FilterNav />
      <Product />
      <Footer/>
    </ApolloProvider>
  );
}
