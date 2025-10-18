'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";

export default function HomePage() {

  const {query} = useContext(SearchContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setProducts(data.categories))
      .catch((err) => console.error(err));
  }, []);

  if (!products) return <div className=" text-3xl">Loading...</div> 

  return (
    <div className=" min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
        Food Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {products.filter(el => el.strCategory.toLowerCase().includes(query.toLowerCase()))
        .map((elem) => (
          <Link href={'/category/' + elem.strCategory} key={elem.idCategory} className="bg-white rounded-2xl shadow-lg overflow-hidden w-[350px]">
            <div className=" flex justify-center">
              <img
                src={elem.strCategoryThumb}
                alt={elem.strCategory}
                className=" w-full  object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {elem.strCategory}
              </h2>
              <p className="text-gray-700 text-sm line-clamp-3">
                {elem.strCategoryDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
