"use client"
import { useEffect, useState } from "react"
import Modal, { Body, Footer, Header, Content } from "../ui/Modal"
import { TbEdit } from "react-icons/tb"
import ButtonPrimary from "../ui/ButtonPrimary"
import { FormControl, NumberInput, NumberInputField } from "@chakra-ui/react"
import ApiClient from "@/app/api/axios/ApiClient"

const ChangeTicketPrice = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal defaultValue={true}> 
      <button 
      onClick={() => setIsOpen(prev => !prev)}
      className="flexCenter gap-1 bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg text-[15px]">
        <TbEdit className="text-lg" />
        <span className="text-center -mt-[2px]">Ubah Harga</span>
      </button>
      {isOpen && <FormContent onClose={() => setIsOpen(false)}/>}
    </Modal>
  )
}

interface Pricing {
  id: number | string
  price: number
}

interface DefaultPricing extends Pricing {
  type: string
}

const FormContent = ({onClose}:{onClose:() => void}) => {
  const [disabledButton, setDisabledButton] = useState(true)
  const [defaultPricings, setDefaultPricings] = useState<DefaultPricing[] | null>(null)
  const [pricings, setPricings] = useState<Pricing[]>([])

  useEffect(() => {
    ApiClient().get(`/api/tickets/ticket-pricings/get`)
    .then((res) => {
      console.log(res.data.pricings)
      setDefaultPricings(res.data.pricings)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[]) 

  const changePrice = (pricing:Pricing) => {
    setPricings((prev) => {
      return prev.map((item) => {
        if(item.id === pricing.id) {
          item.price = pricing.price
        }
        return item
      })
    })
  }
  return (
    <Content width={480} className="relative overflow-hidden" onClose={() => onClose()}>
    <Header title="Ubah Harga" onClose={() => onClose()}/>
    <Body className="px-5 my-1">
      <form action="" className="w-full flex flex-col gap-5">
        {defaultPricings && defaultPricings.map((item, i) => (
          <div key={item.id} className="flexBetween">
            <span>{item.type}</span>
            <FormControl className="!w-1/2">
              <NumberInput
              defaultValue={item.price}
              value={pricings[i].price}
              onChange={(value) => changePrice({id:item.id, price: parseInt(value)})}
              min={1000}
              isRequired
              >
              <NumberInputField placeholder="Harga (Rupiah)" className="placeholder:!text-sm" />
              </NumberInput>
            </FormControl> 
          </div>
        ))}


      </form>
    </Body>
      <Footer 
      className="absolute bottom-0 right-0 left-0 flex justify-end items-center px-4 py-3 bg-white rounded-b-xl">
        <ButtonPrimary
        type="submit"
        disabled={disabledButton}
        className="!rounded-lg bg-blue-500 text-white"
        >Update</ButtonPrimary> 
        </Footer> 
    </Content>
  )
}

export default ChangeTicketPrice
