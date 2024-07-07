import React, { useEffect, useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { DocumentNode, useQuery } from "@apollo/client";
import Link from "next/link";
import { gql } from "../../__generated__/gql";
import Image from "next/image";
import jeansProduct from "../../public/assets/product/image1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";

function Products() {
  const GET_PRODUCTS = gql(/* GraphQL */ `
    query GetProducts($shopId: ID!, $tagId: ID) {
      tags(shopId: $shopId) {
        nodes {
          name
          position
          displayTitle
          slug
          _id
        }
      }
      catalogItems(shopIds: [$shopId], tagIds: [$tagId]) {
        edges {
          node {
            ... on CatalogItemProduct {
              product {
                title
                slug
                description
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
  `) as DocumentNode;
  const [tagId, setTagId] = useState<string | undefined>(undefined);
  const shopId = "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==";
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { shopId, tagId: tagId || null },
  });

  useEffect(() => {
    if (tagId !== undefined) {
      refetch({ shopId, tagId });
    }
  }, [tagId, refetch]);
  useEffect(() => {
    if (data) {
      console.log("Data", data);
    }
  }, [data]);

  useEffect(() => {
    console.log("TagId", tagId);
  }, [tagId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <section className="my-[40px] mx-auto container">
        <div className="px-2 flex flex-wrap lg: justify-between gap-5">
          <div className=" flex flex-wrap lg:items-center gap-[30px]">
            <Link
              href="/"
              scroll={false}
              className="font-bold text-[#1E2832] text-[16px]  hover:text-red-500"
              onClick={() => setTagId(undefined)}
            >
              All Products
            </Link>
            {data?.tags?.nodes?.map(({ displayTitle, slug, _id }: any) => (
              <Link
                key={_id}
                onClick={() => setTagId(_id)}
                scroll={false}
                href={{ pathname: "/", query: { tag: slug } }}
                className="text-[#1E2832] text-[16px]  hover:text-red-500"
              >
                {displayTitle}
              </Link>
            ))}
          </div>
          <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500 font-sans">
            <FontAwesomeIcon icon={faFilter} className="mt-1 me-2" />
            Filter
          </button>
        </div>

        <div className="flex flex-wrap w-full p-[6px] m-4 mt-[40px]">
          {data?.catalogItems &&
            data.catalogItems.edges?.map(({ node }: any) => (
              <div
                key={node.product._id}
                className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md"
              >
                <Link
                  className="relative flex overflow-hidden"
                  href={node.product && `/products/${node.product.slug}`}
                >
                  <Image
                    className="object-cover"
                    src={jeansProduct}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="#">
                    <h5 className="text-sm tracking-tight font-bold font-sans">
                      {node.product.title}
                    </h5>
                  </Link>
                  <div className="mt-2">
                    <p className="text-sm tracking-tight text-gray-400 font-sans">
                      {node.product.description}
                    </p>
                    <h5 className="text-sm tracking-tight text-right font-sans ml-auto">
                      {node.product.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Products;
