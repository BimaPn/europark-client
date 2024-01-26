"use client"
import { IoSearch } from "react-icons/io5"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import CollectionDataSkeleton from "@/components/skeleton/CollectionDataSkeleton"
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import RoundedImage from "../ui/RoundedImage"
import ButtonEdit from "../ui/ButtonEdit"
import CollectionCreate from "../CollectionCreate"
import { collectionContext } from "../provider/CollectionProvider"
import { collectionUpdateContext } from "../CollectionUpdate"
import { FiSearch } from "react-icons/fi"
import DeleteCollectionButton from "../DeleteCollectionButton"
import { AlertMessageProvider, alertMessageContext } from "../AlertMessage"

const CollectionsData = () => {
  const { collections,
  setCollections, deleteCollection } = useContext(collectionContext) as CollectionProvider
  const { setId } = useContext(collectionUpdateContext) as CollectionUpdateProvider
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider

  useEffect(() => {
    ApiClient().get(`/api/collections/get`)
    .then((res) => {
      setCollections(res.data.result.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])
  
  const deleteData = (id:string) => {
    ApiClient().delete(`/api/collections/${id}/delete`)
    .then((res) => {
      setAlert({
        success: true,
        message: "Koleksi berhasil di hapus"
      })
      deleteCollection(id)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  const renderCollections = () => {
    return collections!.map((item,index) => (
      <Tr key={index} className="border-b">
        <Td className='flex items-center gap-2'>
          <RoundedImage 
          src={item.thumbnail}
          alt={item.name}
          className='!min-w-[38px] !w-[38px] !rounded-md !z-[0]' />
          <span className='line-clamp-1'>{item.name}</span>
        </Td>
        <Td>{item.createdBy}</Td>
        <Td>{item.discovery_year}</Td>
        <Td>{item.origin}</Td>
        <TdActions>
          <ButtonEdit callback={() => setId(item.id)} className="relative z-[1000]" />
          <DeleteCollectionButton onDelete={() => deleteData(item.id)} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="flexBetween !items-start">
      <div className="w-fit px-1 flex flex-col mb-[10px] gap-3">
        <div>
          <span className="font-medium text-xl">Daftar Tiket</span>
        </div>
        <div className="w-[256px] flex px-1 gap-1 py-[6px] bg-blue-100/90 text-slate-500 rounded-lg">
          <div className="w-8 aspect-square flexCenter">
            <FiSearch className="text-xl" />
          </div>
          <input type="text" className="w-full bg-transparent placeholder:text-slate-500 text-[15px]" placeholder="Cari tiket" />
        </div>
      </div>
      <div className="px-1">
      <CollectionCreate />
      </div>
    </div>
    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama Koleksi</Th>
          <Th className="text-start">Pembuat</Th>
          <Th className="text-start">Tahun Pembuatan</Th>
          <Th className="text-start">Tempat Asal</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
      {!collections && <CollectionDataSkeleton count={5} />}
      {collections && renderCollections()}
      </Tbody>
    </Table>
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
