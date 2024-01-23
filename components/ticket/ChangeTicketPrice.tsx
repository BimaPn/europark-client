"use client"
import Modal, { Trigger } from "../ui/Modal"
import { TbEdit } from "react-icons/tb"

const ChangeTicketPrice = () => {
  return (
    <Modal> 
      <Trigger className="flexCenter gap-1 bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg text-[15px]">
        <TbEdit className="text-lg" />
        <span className="text-center -mt-[2px]">Ubah Harga</span>
      </Trigger>
    </Modal>
  )
}

export default ChangeTicketPrice
