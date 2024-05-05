import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
function FilterNav() {

  const GET_ITEMS = gql`
  query {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        name
        displayTitle
        slug
      }
    }
  }  
`;
const { loading, error, data } = useQuery(GET_ITEMS);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;
console.log(data.tags)


  return (
    <>
      <div
        className="container mx-auto header"
        style={{ background: "#ffffff" }}
      >
        <header className={"text-black-900"}>
          <div className="container my-5 flex flex-col md:flex-row items-center justify-between py-5 ">
            <nav className=" flex flex-wrap items-center text-base md:ml-5 lg:w-2/5">
              <div className="relative">
                <Link href={"/products"}>
                <button className="mt-4 inline-flex text-black  items-center rounded border-0 pe-3 py-1 text-base hover:text-gray-600 focus:outline-none md:mt-0">
                  All Product
                </button>
                </Link>
               {
                data.tags.nodes.map(({name, slug})=>(
                  <Link href={{
                   query : { tag: slug}
                  }}>
                  <button className="mt-4 inline-flex text-black items-center rounded border-0 pe-3 py-1 text-base hover:text-gray-600 focus:outline-none md:mt-0">
                    {name}
                  </button>
                </Link>
                ))
               }

              </div>
            </nav>

            <div className="ml-5 me-3 flex items-start lg:ml-0 lg:w-2/5 lg:justify-end">
              <button className="mt-4 inline-flex text-white bg-slate-900 items-center rounded border-0 px-3 py-1 text-base hover:bg-slate-600 focus:outline-none md:mt-0">
                <FontAwesomeIcon icon={faFilter} className="w-3 me-2" />
                Filter
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default FilterNav;
