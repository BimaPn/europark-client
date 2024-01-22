import { useContext, useEffect, useState } from "react"
import Modal, { Body, Content, Header, Trigger, Footer, modalContext, ModalProvider } from "./ui/Modal"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import ImagesInput, {Trigger as ImagesTrigger, Preview} from "./ui/ImagesInput"
import TextAreaExpand from "./ui/TextAreaExpand"
import ButtonPrimary from "./ui/ButtonPrimary"
import ApiClient from "@/app/api/axios/ApiClient"

const CollectionCreate = () => {
  return (
    <Modal> 
      <Trigger>
      Buat koleksi
      </Trigger>
      <FormContent />
    </Modal>
  )
}

const FormContent = () => {  
  const defaultData = {
    name: "",
    createdBy: "",
    discovery_year: "",
    origin: "",
    images: [],
    description: ""
  }
  const [formData, setFormData] = useState<CollectionCreate>(defaultData)
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const { toggleModal } = useContext(modalContext) as ModalProvider
  const [errors, setErrors] = useState<CollectionCreateErrors | null>() 

  const isFormDataNotEmpty = () => {
    return formData.name && formData.createdBy && formData.origin && formData.discovery_year && formData.description 
    && formData.images.length > 0
  }
  useEffect(() => {
    setDisabledButton(isFormDataNotEmpty() ? false : true)
  },[formData])

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabledButton(true)
    ApiClient().post(`/api/collections/create`,formData,
    {headers: {"Content-Type":"multipart/form-data"}})
    .then((res) => {
      setFormData(defaultData)
      toggleModal()
    })
    .catch((err) => {
      setErrors(err.response.data.errors)
      setDisabledButton(false)
    })
  }
  const onChange = (field: keyof CollectionCreate, value: string|number|File[]) => {
    setFormData((prev) => {
      return {...prev,[field]:value}
    })
  }
  return (
    <Content width={512} onClose={() => setFormData(defaultData)} className="flex flex-col relative pb-20">
      <div>
        <Header title="Buat Koleksi" onClose={() => setFormData(defaultData)}/>
      </div>
      <form onSubmit={submitForm} className="mt-2 overflow-y-auto px-6 rounded-xl">
        <Body className="flex flex-col gap-4">
          <FormControl isInvalid={errors?.name}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Koleksi</FormLabel>
            <Input
            type='text'
            value={formData.name}
            onChange={(e) => onChange('name',e.target.value)}
            isRequired
            placeholder='Name'
            />
            {errors?.name && (
              <FormErrorMessage>{errors?.name[0]}</FormErrorMessage>
            )}
          </FormControl>    
          <FormControl isInvalid={errors?.createdBy}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Dibuat Oleh</FormLabel>
            <Input
            type='text'
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy',e.target.value)}
            isRequired
            placeholder='Created By'
            />
            {errors?.createdBy && (
              <FormErrorMessage>{errors?.createdBy[0]}</FormErrorMessage>
            )}
          </FormControl>    
          <FormControl isInvalid={errors?.discovery_year}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tahun Pembuatan</FormLabel>
            <Input
            type='text'
            value={formData.discovery_year}
            onChange={(e) => onChange('discovery_year',e.target.value)}
            isRequired
            placeholder='Invented Year'
            />
            {errors?.discovery_year && (
              <FormErrorMessage>{errors?.discovery_year[0]}</FormErrorMessage>
            )}
          </FormControl> 
          <FormControl isInvalid={errors?.origin}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tempat Asal</FormLabel>
            <Input
            type='text'
            value={formData.origin}
            onChange={(e) => onChange('origin',e.target.value)}
            isRequired
            placeholder='Origin'
            />
            {errors?.origin && (
              <FormErrorMessage>{errors?.origin[0]}</FormErrorMessage>
            )}
          </FormControl> 
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Koleksi</FormLabel>
            <ImagesInput value={formData.images} onChange={(images) => onChange('images',images)}>
              <Preview />
              <ImagesTrigger className="px-3 py-[6px] rounded-lg bg-blue-500 text-white">
                Tambah Foto
              </ImagesTrigger>
            </ImagesInput>
          </FormControl> 
          <FormControl isInvalid={errors?.description}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Deskripsi</FormLabel>
            <TextAreaExpand
            value={formData.description}
            onChange={(e) => onChange('description',e.target.value)}
            placeholder="Description"
            className="px-4 py-[6px] border border-slate-300 rounded"
            />
            {errors?.description && (
              <FormErrorMessage>{errors?.description[0]}</FormErrorMessage>
            )}
          </FormControl> 
        </Body>
        <Footer className="absolute bottom-0 right-0 left-0 flex justify-end items-center px-4 py-3 bg-white rounded-b-xl">
          <ButtonPrimary
          type="submit"
          disabled={disabledButton}
          className="!rounded-lg bg-blue-500 text-white"
          >Submit</ButtonPrimary> 
        </Footer> 
      </form>
    </Content>
  )
}

export default CollectionCreate
