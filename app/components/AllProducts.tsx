import React from "react";
import { useQuery, gql } from "@apollo/client";
import jeansProduct from "../../public/assets/product/image1.jpeg";
import Image from "next/image";
import Link from "next/link";

const GET_ALL_PRODUCTS = gql`
  query {
    catalogItems(shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              description
              pricing {
                displayPrice
              }
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function AllProducts() {
    const { data } = useQuery(GET_ALL_PRODUCTS);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.catalogItems.edges.map((edge: any) => {
          const { node } = edge;
          const { product } = node;
          return (
            <div
              key={product._id}
              className="product-card relative flex flex-col overflow-hidden bg-white hover:shadow-md transition"
            >
              <Link className="relative flex overflow-hidden" href="#">
                <Image
                  className="object-cover sm:mx-auto"
                  src={jeansProduct}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight">{product.title}</h5>
                </Link>
  
                <div className="mt-2 flex justify-between">
                  {product.pricing.map((price: any, index: number) => (
                    <h5 key={index} className="text-sm ms-auto tracking-tight">
                      {price.displayPrice}
                    </h5>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default AllProducts
