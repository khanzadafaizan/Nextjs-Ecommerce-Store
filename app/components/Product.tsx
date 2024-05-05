import React from "react";
import Image from "next/image";
function Product() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image1.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-672">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Adicolor Classics Joggers
                </h2>
                <div className="flex justify-between btext-sm">
                  <p className="mt-1">Dress</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image2.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Nike Sportswear Futura Luxe
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Bag</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image3.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Geometric print Scarf
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Dress</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image4.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Yellow Reserved Hoodie
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Dress</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image5.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Basic Dress Green
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Dress</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image6.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Nike Air Zoom Pegasus
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Shoe</p>
                  <p className="mt-1 text-black font-medium ">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image7.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Nike Repel Miler
                </h2>
                <div className="flex justify-between  text-sm">
                  <p className="mt-1">Dress</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
              <a className="block relative h-58 rounded overflow-hidden">
                <Image
                  src="/assets/product/image8.jpeg"
                  width={300}
                  height={300}
                  alt="product-image1"
                />
              </a>
              <div className="my-4 w-72">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Nike Sportswear Futura Luxe
                </h2>
                <div className="flex justify-between  text-sm"> 
                  <p className="mt-1">Glasses</p>
                  <p className="mt-1 text-black font-medium">$63.58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
