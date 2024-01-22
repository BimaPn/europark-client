'use client'
import {useState,createContext,useContext,useEffect,useRef, ChangeEvent, ButtonHTMLAttributes} from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
const imagesInputContext = createContext<ImagesInputContext | null>(null)

const ImagesInput = ({children,value,className,onChange}:InputImages) => {
    const [imagePreviews,setImagePreviews] = useState<string[]>()

    useEffect(() =>{
        renderImages(value)
    },[value])
    
    const renderImages = (imageFiles : File[]) => {
        let _imagePreviews = Array.from(imageFiles).map(file => URL.createObjectURL(file))
        setImagePreviews(_imagePreviews)
    }
    const removeImage = (index:number) => {
        onChange(value.filter(image => value.indexOf(image) !== index))
    }
  return (
    <imagesInputContext.Provider value={{ value,onChange,removeImage,imagePreviews,setImagePreviews }}>
        <div className={className}>
        {children}
        </div>
    </imagesInputContext.Provider>
  )
}

export const Trigger = ({children, className}:{children : React.ReactNode, className?:string}) => {
    const { value,onChange } = useContext(imagesInputContext) as ImagesInputContext
    const inputRef = useRef<HTMLInputElement>(null)

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (files) {
          const newImages = Array.from(files) as File[];
          onChange([...value, ...newImages]);
        }
    };
  return (
    <button 
    type='button'
    onClick={() => inputRef.current!.click()}
    className={className}
    >
        <input 
        type="file" 
        className='hidden' 
        multiple 
        accept="image/*" 
        onChange={onImageChange} 
        ref={inputRef}/>
        {children}
    </button>
  )
}   

export const Preview = ({children, className}:{children?:React.ReactNode, className?:string}) => {
  const { imagePreviews,removeImage } = useContext(imagesInputContext) as ImagesInputContext
  return (
    <div className={`min-w-full overflow-x-auto mb-3`}>
      <div className={`flex items-center gap-3 ${className}`}>
        {children}
        {imagePreviews && imagePreviews.map((content, index) => (
          <ImagePreview
            src={content}
            key={index} 
            alt={content}  
            onRemove={() => removeImage(index)} 
            className="aspect-square rounded-lg w-[60px] sm:min-w-24"
          />
        ))}
      </div>
    </div>
  )
}
export const EditOldImages = ({images,onRemove}:{images:DeletedImages[],onRemove:(id:string)=> void}) => {
  const [oldImages,setOldImages] = useState<DeletedImages[]>(images)

  const deleteOldImage = (id:string) => {
    setOldImages((prev)=>{
      return prev.filter(item => item.id != id)
    })
    onRemove(id)
  } 
  return (
    <>
    {oldImages.map((image) => (
      <ImagePreview
      key={image.id}
      src={image.image}
      onRemove={() => deleteOldImage(image.id)}
      alt='image' 
      className='aspect-square rounded-lg w-[60px] sm:min-w-24'/>
    ))}
    </>
  )
}
const ImagePreview = ({src,alt,className,onRemove}:{src:string,alt:string,className?:string,onRemove?:()=> void}) => {
    const imageRemove = (e:React.MouseEvent) => {
        e.preventDefault()
        onRemove && onRemove()
    }
  return(
    <div className={`relative h-fit overflow-hidden ${className}`}>
        < Image
        src={src} 
        alt={alt}
        fill
        style={{objectFit:"cover"}} />
        <div className='absolute top-0 right-0 p-[2px]'>
            <button type='button' onClick={imageRemove} className='text-light px-1 aspect-square rounded-full bg-black/60'>
            < IoClose className='text-xl' />
            </button>
        </div>
    </div>
  )
}

export default ImagesInput
