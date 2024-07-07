"use client";
import React, { useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { gql } from "../../../__generated__/gql";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import jeansProduct from "../../../public/assets/product/image1.jpeg";

const GET_PRODUCT = gql(`
  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        title
        slug
        description
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            price
            currency {
              code
            }
          }
        }
        primaryImage {
          URLs {
            medium
            original
          }
        }
      }
    }
  }
`) as DocumentNode;

interface Variant {
  optionTitlt: string;
  _id: string;
  title: string;
  attributeLabel: string;
  optionTitle: string;
  pricing: {
    displayPrice: string;
    price: number;
    currency: {
      code: string;
    };
  }[];
}

interface Product {
  title: string;
  slug: string;
  description: string;
  variants: Variant[];
  primaryImage: {
    URLs: {
      medium: string;
      original: string;
    };
  };
}

const Page = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const { loading, error, data } = useQuery<{
    catalogItemProduct: { product: Product }
  }>(GET_PRODUCT, {
    variables: { shopId: '', slugOrId: slug },
  });

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSelectVariant = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  const product = data?.catalogItemProduct?.product;
  return (
    <>
      {product && (
        <div className="font-sans">
          <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center items-center w-full text-right lg:sticky top-0 sm:flex gap-2">
                {/* {product.primaryImage?.URLs?.medium && ( */}
                  <Image
                    // {product.primaryImage.URLs.medium}
                    // {product.title ?? "Product Image"}
                    src={jeansProduct}

                    alt="Product"
                    className="w-4/6 rounded object-cover"
                  />
                {/* )} */}
              </div>
              <div className="leading-none">
                <h2 className="text-2xl font-extrabold text-gray-800 pt-4">{product.title}</h2>
                <p className="text-gray-400">{product.description}</p>
                {selectedVariant ? 
                 (
                  <div className="mt-4">
                    <p className="text-gray-800 text-xl font-bold leading-none">{selectedVariant.pricing[0].displayPrice}</p>
                    <p className="text-gray-400">{selectedVariant.title}</p>
                  </div>
                ):
                (
                  <div className="mt-4">
                    <p className="text-gray-800 text-xl font-bold leading-none">{product.variants[0].pricing[0].displayPrice}</p>
                    <p className="text-gray-400 py-2">{""}</p>
                  </div>
                )
              
              }
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {product.variants.map((variant) => (
                <button key={variant._id} onClick={()=> handleSelectVariant(variant)} type="button" className="px-2 h-8 border-2 hover:border-gray-800 font-semibold text-sm flex items-center justify-center shrink-0">{variant.optionTitle}</button>

                ))}
              </div>
              <button type="button" className="w-full mt-5 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
        </>

    );
};

export default Page;

