"use client";
import { ApolloProvider} from "@apollo/client";
import {client} from "./lib/client"
import ProductSection from "./build/ProductSection";
import Hero from "./components/Hero";

export default function Home() {

 
  return (
    <ApolloProvider client={client}>
    <Hero/>
      <ProductSection/>
      
    </ApolloProvider>
  );
}
