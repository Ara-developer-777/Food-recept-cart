'use client'
import { useState, useContext, useEffect, use } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function SinglPage({ params }) {
  const id = use(params).product; 
  const [product, setProduct] = useState(null);
  const {add} = useContext(CartContext);

  useEffect(() => {
    if (!id) return;

    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.meals ? data.meals[0] : null))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
      {/* Название блюда */}
      <h1 className="text-4xl font-bold mb-4 text-center">{product.strMeal}</h1>

      {/* Изображение */}
      <img
        src={product.strMealThumb}
        alt={product.strMeal}
        className="w-full h-96 object-cover rounded-xl mb-6 shadow-lg"
      />

      {/* Основная информация */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 text-gray-700">
        <p><span className="font-semibold">Category:</span> {product.strCategory}</p>
        <p><span className="font-semibold">Area:</span> {product.strArea}</p>
      </div>

      {/* Инструкция */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">{product.strInstructions}</p>
      </div>

      {/* Ингредиенты и меры */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map(i => {
              const ingredient = product[`strIngredient${i}`];
              const measure = product[`strMeasure${i}`];
              if (!ingredient || ingredient.trim() === "") return null;
              return (
                <li key={i} className="bg-[#ffcc9d] p-2 rounded-lg shadow-sm">
                  <span className="font-medium">{ingredient}</span> - {measure}
                </li>
              );
            })}
        </ul>
      </div>

      {/* YouTube ссылка */}
      {product.strYoutube && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Video Tutorial</h2>
          <a
            href={product.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Watch on YouTube
          </a>
        </div>
      )}

      {/* Источник */}
      {product.strSource && (
        <div className="mb-2 text-gray-500">
          Source: <a href={product.strSource} className="underline" target="_blank">{product.strSource}</a>
        </div>
      )}

      <button onClick={() => add(product)} className=" bg-amber-600 w-full p-3 mt-4 cursor-pointer text-2xl text-white rounded-2xl">Add to cart</button>
    </div>
  );
}
