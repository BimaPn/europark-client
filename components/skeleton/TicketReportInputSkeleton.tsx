import { Skeleton } from "@chakra-ui/react"

const TicketReportInputSkeleton = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Skeleton className='w-1/4 size-sm'/>
      <Skeleton className='w-full size-xl'/>
    </div>
  )
}

export default TicketReportInputSkeleton
