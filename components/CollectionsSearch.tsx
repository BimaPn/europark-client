"use client"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"

const CollectionsSearch = ({onSearch, className}:{onSearch:(query:string)=>void, className?:string}) => {
  const [query, setQuery] = useState<string>("")

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }
  return (
    <form onSubmit={onSubmit} className={`flex items-center border-b-2 border-gray-500 ${className}`}>
      <input 
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full bg-transparent py-[10px] focus:outline-none placeholder:text-gray-500"
      placeholder="Cari koleksi..." 
      />
      <button type="submit" className="w-8 aspect-square flexCenter">
        <FiSearch className="text-[22px] text-gray-600" />
      </button>
    </form>  
  )
}

export default CollectionsSearch
