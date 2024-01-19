import TopSideBar from '@/components/dashboard/TopSideBar'
import { Box, useColorModeValue } from '@chakra-ui/react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-screen bg-blue-100'>
      <TopSideBar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </div>
  )
}

export const PageTitle = ({title, className}:{title:string, className?:string}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h1 className='text-[28px] font-semibold'>{title}</h1>
    </div>
  )
}

export default DashboardLayout
