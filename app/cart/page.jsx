'use client'
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext";
import { SearchContext } from "@/contexts/SearchContext";
import Link from "next/link";

export default function CartPage() {
  const { orders, removeOrder } = useContext(CartContext);
  const {query} = useContext(SearchContext);

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-[#ffd6b0] w-[60%] h-[200px] mx-auto rounded-2xl mt-30 p-10 text-center text-gray-600">
        <h2 className="text-2xl font-bold mt-5">🛒 Ваша корзина пуста</h2>
        <p className="mt-2">Добавьте блюда на странице продукта.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Ваша корзина</h1>
      <div className="space-y-6">
        {orders.filter(el => el.strMeal.toLowerCase().includes(query.toLowerCase()))
        .map((elem) => (
          <div
            key={elem.idMeal}
            className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md p-4"
          >
            <Link href={'/singlProduct/' + elem.idMeal}>
                <img
                    src={elem.strMealThumb}
                    alt={elem.strMeal}
                    className="w-40 h-32 object-cover rounded-xl shadow"
                />
            </Link>

            <div className="flex-1 flex justify-between">
                <Link href={'/singlProduct/' + elem.idMeal} className=" sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                    <h2 className="text-xl font-semibold">{elem.strMeal}</h2>
                    <p className="text-gray-500">Категория: {elem.strCategory}</p>
                    <p className="text-gray-500">Регион: {elem.strArea}</p>
                </Link>
                <div onClick={() => removeOrder(elem.idMeal)} className=" text-[25px] cursor-pointer font-bold translate-y-[-10px]">&times;</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
