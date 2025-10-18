'use client'
import Link from "next/link";
import { use, useEffect, useState } from "react"
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";

export default function Category({ params }) {
  const productCategory = use(params).product; 
  const {query} = useContext(SearchContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${productCategory}`)
      .then(res => res.json())
      .then(data => setProduct(data.meals))
      .catch(err => console.log(err));
  }, [productCategory]);

  return (
    <div>
      <h1 className=" text-4xl text-center font-bold my-4">{productCategory} foods</h1>

      <div className="p-8 flex flex-wrap justify-center gap-6">
        {product.filter(el => el.strMeal.toLowerCase().includes(query.toLowerCase()))
        .map(elem => (
          <Link href={'/singlProduct/' + elem.idMeal} key={elem.idMeal} className="w-[350px] bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={elem.strMealThumb}
              alt={elem.strMeal}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold p-2">{elem.strMeal}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
