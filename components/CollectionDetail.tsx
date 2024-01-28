import CollectionImagesPreview from './CollectionImagesPreview'

const CollectionDetail = ({name, ...rest}:{name:string,createdBy:string, description:string, origin:string, discover_year:string, images:string[]}) => {
  return (
    <section className='boxWidth min-h-[70vh] flex justify-between gap-16 relative !mt-5'>
      <div className="basis-[55%]">
        <div className='flex flex-col gap-3'>
          <h1 className='font-semibold text-4xl tracking-wide'>{name}</h1>
          <span className='font-medium text-lg'>{rest.createdBy}, {rest.origin}, {rest.discover_year}</span>
        </div>
        <div className='mt-6'>
          <p className='text-justify tracking-wide leading-7'>
            {rest.description} 
          </p>
        </div>
      </div>
      <div className="basis-[45%]">
        <CollectionImagesPreview images={rest.images} />
      </div>
    </section>
  )
}

export default CollectionDetail
