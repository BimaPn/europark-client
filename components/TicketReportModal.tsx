"use client"
import { useContext, useEffect, useState } from "react"
import Modal, { Body, Content, Footer, Header } from "./ui/Modal"
import { TbReportAnalytics } from "react-icons/tb"
import { Select } from "@chakra-ui/react"
import ButtonPrimary from "./ui/ButtonPrimary"
import YearInput from "./ticket/report/YearInput"
import { ReportDateProvider, reportContext } from "./provider/TicketReportDateProvider"
import MonthInput from "./ticket/report/MonthInput"
import DayInput from "./ticket/report/DayInput"
import { useRouter } from "next-nprogress-bar"

const TicketReportModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {resetDate} = useContext(reportContext) as ReportDateProvider  
  useEffect(() => {
    resetDate()
  },[])
  return (
    <Modal defaultValue={true}>
      <button 
      onClick={() => setIsOpen((prev) => !prev)}
      className="flexCenter gap-[2px] font-medium text-blue-500 border border-blue-400 pl-1 pr-2 ss:pl-2 ss:pr-3 py-[7px] rounded-lg text-sm ss:text-[14px]">
      <TbReportAnalytics className="text-lg" />
        <span className="text-center">Laporan</span>
      </button>

      {isOpen && <ModalContent onClose={() => setIsOpen(false)} />}
    </Modal>
  )
}

const ModalContent = ({onClose}:{onClose:()=>void}) => {
  const [category, setCategory] = useState<number>(-1)
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const {date, dateChange} = useContext(reportContext) as ReportDateProvider  
  const router = useRouter()

  useEffect(() => {
    if(category == 1) {
      setDisabledButton(date.year ? false : true)
    }else if(category == 2) {
      setDisabledButton((date.year && date.month) ? false : true)
    }else if(category == 3) {
      setDisabledButton((date.year && date.month && date.day) ? false : true)
    }
  },[category, date])

  const onPrint = () => {
    setDisabledButton(true)
    router.push("/admin/tickets/report")
  }
  return (
   <Content width={384} className="relative sm:!h-[70%]" onClose={() => onClose()}>
    <Header title="Cetak Laporan" onClose={() => onClose()}/>
    <Body className="px-4">
      <span className="text-sm font-medium">Pilih Kategori Laporan</span>
      <div className="grid grid-cols-3 gap-2 text-sm mt-2">
        {["Tahunan", "Bulanan", "Harian"].map((item, i) => (
          <button 
          key={i}
          onClick={() => setCategory(i+1)}
          className={`px-4 py-2 rounded-lg border ${category == (i+1) && "bg-blue-200 font-medium !border-0"}`}>
          {item}
          </button>
        ))}      
      </div>
      
      <div className="flex flex-col gap-3 mt-3">
        {category >= 1 && (
          <YearInput optionChange={(year) => dateChange("year",year)} />
        )}

        {(category >= 2 && date.year) && (
          <MonthInput optionChange={(month) => dateChange("month",month)} />
        )}
        {(category >= 3 && date.year && date.month) && (
          <DayInput optionChange={(day) => dateChange("day",day)}/>
        )}

      </div>
    </Body>
    <Footer className="absolute bottom-0 right-0 left-0 flex justify-end items-center px-3 py-3 bg-white rounded-b-xl">
      <ButtonPrimary
      disabled={disabledButton}
      onClick={onPrint}
      className="!rounded-lg bg-blue-500 text-white font-medium !text-sm"
      >Cetak</ButtonPrimary> 
    </Footer> 
  </Content>

  )
}

export default TicketReportModal
