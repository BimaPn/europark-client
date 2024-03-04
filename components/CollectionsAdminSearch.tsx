"use client"
import { useContext } from "react"
import Search from "./ui/Search"
import { collectionContext } from "./provider/CollectionProvider"
import ApiClient from "@/app/api/axios/ApiClient"

const CollectionsAdminSearch = () => {
  const { collections, setCollections, setPaginate } = useContext(collectionContext) as CollectionProvider

  const searchTicket = (query:string) => {
    setCollections(null)
    ApiClient().get(`/api/collections/search/admin?name=${query}`)
    .then((res) => {
      setCollections(res.data.collections)
      setPaginate(res.data.paginate)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  return (
    <Search onSearch={searchTicket} placeholder="Cari Koleksi" />
  )
}

export default CollectionsAdminSearch
