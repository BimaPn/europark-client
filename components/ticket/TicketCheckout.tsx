"use client"
import { 
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input, 
  NumberInput,
  NumberInputField,
  Textarea
} from '@chakra-ui/react'
import ImageInput from '../ui/ImageInput'
import { useContext, useEffect, useState } from 'react'
import { ticketPurchaseContext } from '../provider/TicketPurchaseProvider'
import ButtonCheckout from './ButtonCheckout'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const TicketCheckout = () => {
  const { ticketCheckoutData,
  disableSubmit, setDisableSubmit } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const checkFieldsExist = () => {
    return ticketCheckoutData.name && ticketCheckoutData.email && ticketCheckoutData.whatsapp_number
    && ticketCheckoutData.identity_card_picture
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
  setTicketCheckoutData, setDisableSubmit, setIsDone}= useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [errors, setErrors] = useState<TicketCheckoutFormErrors| null>() 
  const router = useRouter()

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisableSubmit(true)
    axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/create`,
    ticketCheckoutData,
    {withCredentials:true, headers: {"Content-Type":"multipart/form-data"}})
    .then((res) => {
      setIsDone(true)
      router.push("/tickets/buy/success")
      setErrors(null)
    })
    .catch((err) => {
      if(err.response.status === 419) {
        setIsDone(true)
        router.push("/tickets/buy/expired")
      }
      setDisableSubmit(false)
      setErrors(err.response.data.errors)
    })
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
        <FormControl isInvalid={errors?.email}>
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
          {errors?.email && (
            <FormErrorMessage>{errors?.email[0]}</FormErrorMessage>
          )}
        </FormControl>        
      </div>    
      <div className='flex flex-col gap-4'>
        <span className='font-medium text-lg'>Masukan Data Diri Anda</span>       
        <FormControl className='!-mt-1' isInvalid={errors?.name}>
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
          {errors?.name && (
            <FormErrorMessage>{errors?.name[0]}</FormErrorMessage>
          )}
        </FormControl>        
        <FormControl isInvalid={errors?.whatsapp_number}>
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
          {errors?.whatsapp_number && (
            <FormErrorMessage>{errors?.whatsapp_number[0]}</FormErrorMessage>
          )}
        </FormControl> 
        <FormControl isInvalid={errors?.identity_card_picture}>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Kartu Identitas</FormLabel>
          <ImageInput
          onChange={(image) => onChange("identity_card_picture",image)}
          />
          {errors?.identity_card_picture && (
            <FormErrorMessage>{errors?.identity_card_picture[0]}</FormErrorMessage>
          )}
        </FormControl> 

        <FormControl isInvalid={errors?.institute_name}>
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
          {errors?.institute_name && (
            <FormErrorMessage>{errors?.institute_name[0]}</FormErrorMessage>
          )}
        </FormControl> 
        <FormControl
         className={`${ticketCheckoutData.institute_name ? "opacity-100":"opacity-50"}`}
         isReadOnly={ticketCheckoutData.institute_name == undefined}
         isInvalid={errors?.institute_address}
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
          {errors?.institute_address && (
            <FormErrorMessage>{errors?.institute_address[0]}</FormErrorMessage>
          )}
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
