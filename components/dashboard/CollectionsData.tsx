"use client"

import { IoSearch } from "react-icons/io5"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import RoundedImage from "../ui/RoundedImage"
import ButtonDelete from "../ui/ButtonDelete"
import ButtonEdit from "../ui/ButtonEdit"
import CollectionCreate from "../CollectionCreate"
import { collectionContext } from "../provider/CollectionProvider"

const CollectionsData = () => {
  const { collections, setCollections } = useContext(collectionContext) as CollectionProvider
  useEffect(() => {
    ApiClient().get(`/api/collections/get`)
    .then((res) => {
      setCollections(res.data.result.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])

  const renderCollections = () => {
    return collections!.map((item,index) => (
      <Tr key={index} className="border-b">
        <Td className='flex items-center gap-2'>
          <RoundedImage 
          src={item.thumbnail}
          alt={item.name}
          className='!min-w-[38px] !w-[38px] !rounded-md z-0' />
          <span className='line-clamp-1'>{item.name}</span>
        </Td>
        <Td>{item.createdBy}</Td>
        <Td className="text-center">{item.discovery_year}</Td>
        <Td className="text-center">{item.origin}</Td>
        <TdActions>
          <ButtonEdit callback={() => alert("edit data")} />
          <ButtonDelete callback={() => alert("delete data")} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="px-1 flexBetween mb-[10px]">
      <div className="relative z-[8000]">
        <CollectionCreate />
      </div>
      <div className="w-52 flex px-1 py-1 bg-blue-100/90 text-slate-500 rounded-lg">
        <div className="w-8 aspect-square flexCenter">
          <IoSearch />
        </div>
        <input type="text" className="w-full bg-transparent placeholder:text-slate-500 text-xs" placeholder="Cari tiket" />
      </div>
    </div>
    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama Koleksi</Th>
          <Th className="text-start">Pembuat</Th>
          <Th >Tahun Pembuatan</Th>
          <Th>Tempat Asal</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
      {collections && renderCollections()}
      </Tbody>
    </Table>
    {!collections && <p>loading</p>}
    <div className="absolute bottom-0 right-0 px-4 py-4">
      <ReactPaginate
      pageCount={20}
      pageRangeDisplayed={1}
      marginPagesDisplayed={2}
      previousLabel={
        <div className="w-8 aspect-square flexCenter">
          <IoIosArrowBack />
        </div>
      }
      nextLabel={
        <div className="w-8 aspect-square flexCenter">
          <IoIosArrowForward />
        </div>
      }
      className="flex items-center gap-1" 
      pageClassName="w-8 aspect-square h-fit flexCenter"
      activeClassName="bg-blue-500 text-white rounded-lg"
      />
    </div>
  </>
  )
}

export default CollectionsData
