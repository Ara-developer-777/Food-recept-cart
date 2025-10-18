'use client'
import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import { CartContext } from "@/contexts/CartContext";

export default function Header() {

  const {query, setQuery} = useContext(SearchContext);
  const {count} = useContext(CartContext)

  return (
    <header className=" sticky bg-[#e7750a] shadow-md left-0 right-0 top-0 z-10">
      <div className=" max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-[30px] font-bold text-white tracking-wide hover:text-red-100 transition-colors w-[300px]"
        >
          Bon Appetit
        </Link>

        <div className=" flex justify-between gap-4 bg-white rounded-2xl py-1 px-4 w-[300px]">
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="search food..." className=" outline-0 p-2 w-full"/>
          <button>🔍</button>
        </div>

        <nav className="flex items-center gap-8 text-white font-medium">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors text-[22px]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors text-[22px]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors text-[22px]"
          >
            Contact
          </Link>

          <Link 
            href={'/cart'}  
            className=" relative"
          >
            <p className=" bg-[#e7750a] rounded-full text-center text-[13px] absolute top-[-10px] right-[-4px]">{count}</p>
            <img src="/cart.svg" alt="cart" className=" w-[25px]" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
