"use client"
import { FormControl, FormLabel, Input, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react'
import ImageInput from '../ui/ImageInput'
import { useContext, useEffect } from 'react'
import { ticketPurchaseContext } from '../provider/TicketPurchaseProvider'
import ButtonCheckout from './ButtonCheckout'

const TicketCheckout = () => {
  const { ticketCheckoutData,
  disableSubmit, setDisableSubmit } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const checkFieldsExist = () => {
    return ticketCheckoutData.name && ticketCheckoutData.email && ticketCheckoutData.whatsapp_number
    && ticketCheckoutData.indentity_card_picture
  }
  const checkInstituteFields = () => {
    if(ticketCheckoutData.institute_name) {
      if(ticketCheckoutData.institute_address) {
        setDisableSubmit(false)
      }else {
        setDisableSubmit(true)
      }
    }else {
      setDisableSubmit(false)
    }
  }
  const setSubmitButton = () => {
    if(checkFieldsExist()) {
      checkInstituteFields()
    }else {
      setDisableSubmit(true)
    }
  }

  useEffect(() => {
    setSubmitButton()
  },[ticketCheckoutData])

  return (
    <section className='flex flex-col gap-8 mb-8'>
      <CheckoutForm disableSubmit={disableSubmit} />
    </section>
  )
}

const CheckoutForm = ({disableSubmit}:{disableSubmit:boolean}) => {
  const {ticketCheckoutData, ticketQuantity,
  setTicketCheckoutData}=useContext(ticketPurchaseContext) as TicketPurchaseContext
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("submitted buddy")
  }
  const onChange = (field: keyof TicketCheckoutForm, value: string|number|File) => {
    setTicketCheckoutData((prev:TicketCheckoutForm) => {
      return {...prev,[field]:value}
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3 mb-6'>
        <span className='font-medium text-lg'>Kemana tiket akan dikirim ?</span>
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Alamat Email</FormLabel>
          <Input
          type='email'
          value={ticketCheckoutData.email}
          onChange={(e) => onChange("email",e.target.value)}
          className="xs:!w-[70%]"
          isRequired
          placeholder='Email Address'
          />
        </FormControl>        
      </div>    
      <div className='flex flex-col gap-4'>
        <span className='font-medium text-lg'>Masukan Data Diri Anda</span>       
        <FormControl className='!-mt-1'>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Lengkap</FormLabel>
          <Input 
          type='text'
          value={ticketCheckoutData.name}
          onChange={(e) => onChange("name",e.target.value)}
          className="xs:!w-[70%]"
          isRequired
          placeholder='Full Name'
          />
        </FormControl>        
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Nomor Whatsapp</FormLabel>
          <NumberInput
          value={ticketCheckoutData.whatsapp_number}
          onChange={(value) => onChange("whatsapp_number",value)}
          className="xs:!w-[70%]"
          isRequired
          >
          <NumberInputField placeholder="Whatsapp Number" />
          </NumberInput>
        </FormControl> 
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Kartu Identitas</FormLabel>
          <ImageInput
          onChange={(image) => onChange("indentity_card_picture",image)}
          />
        </FormControl> 

        <FormControl >
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>
          Nama Institusi (optional)
          </FormLabel>
          <Input 
          type='text'
          value={ticketCheckoutData.institute_name ? ticketCheckoutData.institute_name : ""}
          onChange={(e) => onChange("institute_name",e.target.value)}
          className="xs:!w-[70%]" 
          placeholder="Institute's Name"
          />
        </FormControl> 
        <FormControl
         className={`${ticketCheckoutData.institute_name ? "opacity-100":"opacity-50"}`}
         isReadOnly={ticketCheckoutData.institute_name == undefined}
        >
          <FormLabel
          fontWeight={400}
          fontSize={15}
          className='font-normal text-xs'>Alamat Institusi (optional)</FormLabel>
          <Textarea
          value={ticketCheckoutData.institute_address ? ticketCheckoutData.institute_address : ""}
          onChange={(e) => onChange("institute_address", e.target.value)}
          placeholder="Institute's Address" 
          />
        </FormControl> 
      </div>
      <div className="w-[584px] bg-white mx-auto sticky bottom-0 right-0 left-0 z-[1000]">
        <ButtonCheckout 
        disabled={disableSubmit}
        ticketQuantity={ticketQuantity}
        />
      </div>
    </form>
  )
}

export default TicketCheckout
