import { FormControl, FormLabel, Input, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react'
import ImageInput from '../ui/ImageInput'

const TicketCheckout = () => {
  return (
    <section className='flex flex-col gap-8 mb-8'>
      <div className='flex flex-col gap-3'>
        <span className='font-medium text-lg'>Kemana tiket akan dikirim ?</span>
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Alamat Email</FormLabel>
          <Input type='email' className="xs:!w-[70%]" placeholder='Email Address' />
        </FormControl>        
      </div>
      <div className='flex flex-col gap-4'>
        <span className='font-medium text-lg'>Masukan Data Diri Anda</span>       
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Lengkap</FormLabel>
          <Input type='text' className="xs:!w-[70%]" placeholder='Full Name' />
        </FormControl>        
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Nomor Whatsapp</FormLabel>
          <NumberInput className="xs:!w-[70%]">
          <NumberInputField placeholder="Whatsapp Number" />
          </NumberInput>
        </FormControl> 
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Kartu Identitas</FormLabel>
          <ImageInput onChange={(image) => console.log(image)} />
        </FormControl> 

        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Institusi (optional)</FormLabel>
          <Input type='number' className="xs:!w-[70%]" placeholder="Institute's Name" />
        </FormControl> 
        <FormControl>
          <FormLabel
          fontWeight={400}
          fontSize={15}
          className='font-normal text-xs'>Alamat Institusi (optional)</FormLabel>
          <Textarea placeholder="Institute's Address" />
        </FormControl> 
      </div>

    </section>
  )
}

export default TicketCheckout
